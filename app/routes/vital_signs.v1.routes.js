const vital_signs = require("../controllers/vital_signs.v1.controller")
const router = require("express").Router()

module.exports = (app) => {
  // GET
  router.get("", vital_signs.findAll)
  router.post("", vital_signs.create)

  app.use("/api/v1/vital_signs", router)
}
