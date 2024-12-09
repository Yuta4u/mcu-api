const express = require("express")
const compression = require("compression")
const serverless = require("serverless-http")
const dotenv = require("dotenv")
const cors = require("cors")
const helmet = require("helmet")
const rateLimit = require("express-rate-limit")
const { errorHandler } = require("./app/middleware/errorHandler")
const { logger } = require("./app/utils/logger")

dotenv.config()
const app = express()

// Security middlewares
app.use(helmet())
app.use(cors())
app.options("*", cors())

// app.use((req, res, next) => {
//   const userAgent = req.headers["user-agent"]
//   if (userAgent.includes("Postman")) {
//     return res
//       .status(403)
//       .json({ message: "Access from Postman is not allowed" })
//   }
//   next()
// })
// app.set("trust proxy", true)

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 250,
  standardHeaders: true,
  legacyHeaders: false,
})
app.use(limiter)

// Performance middlewares
app.use(compression())

// Body parsing middlewares
app.use(express.json({ limit: "1mb" }))
app.use(express.urlencoded({ extended: true, limit: "1mb" }))

// Simple route
app.get("/", (req, res) => {
  res.json({ message: "MY-MCU API" })
})

// Patients Routes
require("./app/routes/patients.v1.routes")(app)

// Medical Histories Routes
require("./app/routes/medical_histories.v1.routes")(app)

// Family Histories Routes
require("./app/routes/family_histories.v1.routes")(app)

// Vital Signs Routes
require("./app/routes/vital_signs.v1.routes")(app)

// Physical Examinations Routes
require("./app/routes/physical_examinations.v1.routes")(app)

// Physical Examinations Routes
require("./app/routes/life_styles.v1.routes")(app)

// Error handling middleware
app.use(errorHandler)

// Start server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  logger.info(`Server are running on ${PORT}.`)
})

module.exports = app
module.exports.handler = serverless(app)
