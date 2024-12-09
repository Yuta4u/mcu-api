const { LifeStyle } = require("../../models")
const { handleError } = require("../utils/error.message")
const cache = require("memory-cache")
const db = require("../../models")

exports.findAll = async (_, res) => {
  try {
    const cacheKey = "life_styles"
    const cachedData = cache.get(cacheKey)
    if (cachedData) {
      res.send({
        message: "Successfully find all life styles",
        data: cachedData,
      })
    } else {
      const data = await LifeStyle.findAll()
      cache.put(cacheKey, data)
      res.send({
        message: "Successfully find all life styles",
        data: data,
      })
    }
  } catch (error) {
    handleError(error, res)
  }
}

exports.create = async (req, res) => {
  const t = await db.sequelize.transaction()
  try {
    const newLifeStyle = await LifeStyle.create(req.body, {
      t,
    })

    await t.commit()

    const cacheKey = "life_styles"
    const cachePatient = "patients"
    cache.del(cacheKey)
    cache.del(cachePatient)

    return res.status(201).send({
      message: "Successfully created a new life style",
      data: newLifeStyle,
    })
  } catch (error) {
    // Rollback transaksi jika terjadi error
    await t.rollback()
    handleError(error, res)
  }
}
