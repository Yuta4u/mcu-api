"use strict"

const {
  ValidationError,
  UniqueConstraintError,
  ForeignKeyConstraintError,
  DatabaseError,
} = require("sequelize")

const handleError = (error, res) => {
  // Validation Errors
  if (error instanceof ValidationError) {
    return res.status(400).json({
      status: "error",
      code: "VALIDATION_ERROR",
      message: "Data validation failed",
      errors: error.errors.map((err) => ({
        field: err.path,
        message: err.message,
        value: err.value,
      })),
    })
  }

  // Unique Constraint Errors
  if (error instanceof UniqueConstraintError) {
    return res.status(409).json({
      status: "error",
      code: "UNIQUE_CONSTRAINT_ERROR",
      message: "A record with this value already exists",
      errors: error.errors.map((err) => ({
        field: err.path,
        message: `${err.path} must be unique`,
        value: err.value,
      })),
    })
  }

  // Foreign Key Constraint Errors
  if (error instanceof ForeignKeyConstraintError) {
    return res.status(404).json({
      status: "error",
      code: "FOREIGN_KEY_CONSTRAINT_ERROR",
      message: "Referenced record not found",
      details: {
        table: error.table,
        field: error.fields?.[0],
        value: error.value,
      },
    })
  }

  // Database Connection Errors
  if (error instanceof DatabaseError) {
    // Log the detailed error for debugging but send a sanitized response
    console.error("Database Error:", error)
    return res.status(503).json({
      status: "error",
      code: "DATABASE_ERROR",
      message: "Database operation failed",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    })
  }

  // Handle Timeout Errors
  if (error.name === "SequelizeTimeoutError") {
    return res.status(504).json({
      status: "error",
      code: "TIMEOUT_ERROR",
      message: "The request took too long to process",
    })
  }

  // Handle Connection Errors
  if (error.name === "SequelizeConnectionError") {
    return res.status(503).json({
      status: "error",
      code: "CONNECTION_ERROR",
      message: "Unable to connect to the database",
    })
  }

  // Handle Connection Refused Errors
  if (error.name === "SequelizeConnectionRefusedError") {
    return res.status(503).json({
      status: "error",
      code: "CONNECTION_REFUSED",
      message: "Database connection was refused",
    })
  }

  // Handle Host Not Found Errors
  if (error.name === "SequelizeHostNotFoundError") {
    return res.status(503).json({
      status: "error",
      code: "HOST_NOT_FOUND",
      message: "Database host not found",
    })
  }

  // Handle Bulk Record Errors
  if (error.name === "BulkRecordError") {
    return res.status(400).json({
      status: "error",
      code: "BULK_RECORD_ERROR",
      message: "Error occurred while processing multiple records",
      errors: error.errors,
    })
  }

  // Generic Error Handler
  return res.status(500).json({
    status: "error",
    code: "INTERNAL_SERVER_ERROR",
    message: "An unexpected error occurred",
    reference: generateErrorReference(),
    details: process.env.NODE_ENV === "development" ? error.message : undefined,
  })
}

// Utility function to generate unique error reference
const generateErrorReference = () => {
  return `ERR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

// Middleware untuk async error handling
// const asyncHandler = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch((error) => handleError(error, res))
// }

module.exports = {
  handleError,
  //   asyncHandler,
}
