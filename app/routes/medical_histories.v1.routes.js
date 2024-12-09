const medical_histories = require("../controllers/medical_histories.v1.controller")
const router = require("express").Router()

module.exports = (app) => {
  // GET
  router.get("", medical_histories.findAll)
  router.post("", medical_histories.create)

  app.use("/api/v1/medical_histories", router)
}
