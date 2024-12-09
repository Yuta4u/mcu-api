"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class FamilyHistory extends Model {
    static associate(models) {
      this.belongsTo(models.Patients, {
        foreignKey: "patient_id",
      })
    }
  }

  FamilyHistory.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      patient_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "patients",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      riwayat_penyakit_jantung: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_hipertensi: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_kencing_manis: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_stroke: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_paru: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_kanker: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_gangguan_jiwa: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_ginjal: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_saluran_pencernaan: {
        type: DataTypes.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_lainnya: {
        type: DataTypes.TEXT,
        defaultValue: "Tidak ada",
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "FamilyHistory",
      tableName: "family_histories", // Nama tabel yang benar
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  )

  return FamilyHistory
}
