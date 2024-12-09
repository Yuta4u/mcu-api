const family_histories = require("../controllers/family_histories.v1.controller")
const router = require("express").Router()

module.exports = (app) => {
  // GET
  router.get("", family_histories.findAll)
  router.post("", family_histories.create)

  app.use("/api/v1/family_histories", router)
}
