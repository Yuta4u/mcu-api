const { MedicalHistory } = require("../../models")
const cache = require("memory-cache")
const { handleError } = require("../utils/error.message")
const db = require("../../models")

exports.findAll = async (_, res) => {
  try {
    const cacheKey = "medical_histories"
    const cachedData = cache.get(cacheKey)
    if (cachedData) {
      res.send({
        message: "Successfully find all medical histories",
        data: cachedData,
      })
    } else {
      const data = await MedicalHistory.findAll()
      cache.put(cacheKey, data)
      res.send({
        message: "Successfully find all medical histories",
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
    const newMedicalHistory = await MedicalHistory.create(req.body, { t })

    await t.commit()

    const cacheKey = "medical_histories"
    const cachePatient = "patients"
    cache.del(cacheKey)
    cache.del(cachePatient)

    return res.status(201).send({
      message: "Successfully created a new medical history",
      data: newMedicalHistory,
    })
  } catch (error) {
    // Rollback transaksi jika terjadi error
    await t.rollback()
    handleError(error, res)
  }
}
