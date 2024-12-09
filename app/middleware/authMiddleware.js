// middleware/authMiddleware.js
// const jwt = require("jsonwebtoken")
// const User = require("../models/User") // Pastikan model User sudah dibuat

const authMiddleware = async (req, res, next) => {
  try {
    throw new Error("ERROR CUY")
    next()
  } catch (error) {
    res.status(401).send({ error: "Please authenticate" })
  }
}

// Role-based Authorization Middleware
const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send({
        error: "Access denied. Insufficient permissions",
      })
    }
    next()
  }
}

module.exports = {
  authMiddleware,
  authorizeRoles,
}
