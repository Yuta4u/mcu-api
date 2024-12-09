const {
  Patients,
  MedicalHistory,
  FamilyHistory,
  VitalSign,
  PhysicalExamination,
  LifeStyle,
} = require("../../models")
const cache = require("memory-cache")
const db = require("../../models")
const { handleError } = require("../utils/error.message")

exports.findAll = async (_, res) => {
  try {
    const cacheKey = "patients"
    const cachedData = cache.get(cacheKey)
    if (cachedData) {
      res.send({
        message: "Successfully find all patients",
        data: cachedData,
      })
    } else {
      const data = await Patients.findAll({
        attributes: {
          // exclude: ["id", "patient_id", "created_at", "updated_at"],
        },
        include: [
          {
            model: MedicalHistory,
            attributes: {
              exclude: ["id", "patient_id", "created_at", "updated_at"],
            },
            as: "medical_history",
          },
          {
            model: FamilyHistory,
            attributes: {
              exclude: ["id", "patient_id", "created_at", "updated_at"],
            },
            as: "family_history",
          },
          {
            model: VitalSign,
            attributes: {
              exclude: ["id", "patient_id", "created_at", "updated_at"],
            },
            as: "vital_sign",
          },
          {
            model: PhysicalExamination,
            attributes: {
              exclude: ["id", "patient_id", "created_at", "updated_at"],
            },
            as: "physical_examination",
          },
          {
            model: LifeStyle,
            attributes: {
              exclude: ["id", "patient_id", "created_at", "updated_at"],
            },
            as: "life_style",
          },
        ],
      })
      cache.put(cacheKey, data)
      res.send({
        message: "Successfully find all patients",
        data: data,
      })
    }
  } catch (error) {
    handleError(error, res)
  }
}

exports.create = async (req, res) => {
  const t = await db.sequelize.transaction() // Memulai transaksi
  try {
    const { medical_id, paket_mcu, tanggal_pemeriksaan } = req.body

    // Validasi input
    if (!medical_id || !paket_mcu || !tanggal_pemeriksaan) {
      return res.status(400).send({
        message:
          "Validation error: medical_id, paket_mcu, and tanggal_pemeriksaan are required fields.",
      })
    }

    // Buat data baru dalam t
    const newPatient = await Patients.create(req.body, { t })

    // Commit transaksi jika berhasil
    await t.commit()

    // Clear cache jika diperlukan
    const cacheKey = "patients"
    cache.del(cacheKey)

    res.status(201).send({
      message: "Successfully created a new patient",
      data: newPatient,
    })
  } catch (error) {
    // Rollback transaksi jika terjadi error
    await t.rollback()
    handleError(error, res)
  }
}
