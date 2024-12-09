const { FamilyHistory } = require("../../models")
const { handleError } = require("../utils/error.message")
const cache = require("memory-cache")
const db = require("../../models")

exports.findAll = async (_, res) => {
  try {
    const cacheKey = "family_histories"
    const cachedData = cache.get(cacheKey)
    if (cachedData) {
      res.send({
        message: "Successfully find all family histories",
        data: cachedData,
      })
    } else {
      const data = await FamilyHistory.findAll()
      cache.put(cacheKey, data)
      res.send({
        message: "Successfully find all family histories",
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
    const newFamilyHistory = await FamilyHistory.create(req.body, { t })

    await t.commit()

    const cacheKey = "family_histories"
    const cachePatient = "patients"
    cache.del(cacheKey)
    cache.del(cachePatient)

    return res.status(201).send({
      message: "Successfully created a new family history",
      data: newFamilyHistory,
    })
  } catch (error) {
    // Rollback transaksi jika terjadi error
    await t.rollback()
    handleError(error, res)
  }
}
