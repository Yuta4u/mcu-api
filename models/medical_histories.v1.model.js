"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class MedicalHistory extends Model {
    static associate(models) {
      this.belongsTo(models.Patients, {
        foreignKey: "patient_id",
      })
    }
  }

  MedicalHistory.init(
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
      riwayat_hepatitis: {
        type: DataTypes.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_pengobatan_tbc: {
        type: DataTypes.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      hipertensi: {
        type: DataTypes.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      kencing_manis: {
        type: DataTypes.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      batuk_menahun: {
        type: DataTypes.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_operasi: {
        type: DataTypes.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_rawat_inap: {
        type: DataTypes.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_alergi: {
        type: DataTypes.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      lain_lain: {
        type: DataTypes.TEXT,
        defaultValue: "Tidak Ada",
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
      modelName: "MedicalHistory",
      tableName: "medical_histories",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  )

  return MedicalHistory
}
