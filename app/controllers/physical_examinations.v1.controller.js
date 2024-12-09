const { PhysicalExamination } = require("../../models")
const { handleError } = require("../utils/error.message")
const cache = require("memory-cache")
const db = require("../../models")

exports.findAll = async (_, res) => {
  try {
    const cacheKey = "physical_examinations"
    const cachedData = cache.get(cacheKey)
    if (cachedData) {
      res.send({
        message: "Successfully find all physical examinations",
        data: cachedData,
      })
    } else {
      const data = await PhysicalExamination.findAll()
      cache.put(cacheKey, data)
      res.send({
        message: "Successfully find all physical examinations",
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
    const newPhysicalExamination = await PhysicalExamination.create(req.body, {
      t,
    })

    await t.commit()

    const cacheKey = "physical_examinations"
    const cachePatient = "patients"
    cache.del(cacheKey)
    cache.del(cachePatient)

    return res.status(201).send({
      message: "Successfully created a new physical examinations",
      data: newPhysicalExamination,
    })
  } catch (error) {
    // Rollback transaksi jika terjadi error
    await t.rollback()
    handleError(error, res)
  }
}
