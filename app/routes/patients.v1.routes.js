const patients = require("../controllers/patients.v1.controller")
const router = require("express").Router()

module.exports = (app) => {
  // GET
  router.get("", patients.findAll)
  router.post("", patients.create)

  app.use("/api/v1/patients", router)
}
