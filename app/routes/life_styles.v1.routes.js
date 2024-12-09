const life_styles = require("../controllers/life_styles.v1.controller")
const router = require("express").Router()

module.exports = (app) => {
  // GET
  router.get("", life_styles.findAll)
  router.post("", life_styles.create)

  app.use("/api/v1/life_styles", router)
}
