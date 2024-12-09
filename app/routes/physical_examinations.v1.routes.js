const physical_examinations = require("../controllers/physical_examinations.v1.controller")
const router = require("express").Router()

module.exports = (app) => {
  // GET
  router.get("", physical_examinations.findAll)
  router.post("", physical_examinations.create)

  app.use("/api/v1/physical_examinations", router)
}
