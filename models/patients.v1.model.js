"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class Patients extends Model {
    static associate(models) {
      // define association here
      this.hasOne(models.MedicalHistory, {
        foreignKey: "patient_id",
        as: "medical_history",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
      this.hasOne(models.FamilyHistory, {
        foreignKey: "patient_id",
        as: "family_history",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
      this.hasOne(models.VitalSign, {
        foreignKey: "patient_id",
        as: "vital_sign",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
      this.hasOne(models.PhysicalExamination, {
        foreignKey: "patient_id",
        as: "physical_examination",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
      this.hasOne(models.LifeStyle, {
        foreignKey: "patient_id",
        as: "life_style",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      })
    }
  }

  Patients.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      medical_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      ktp: {
        type: DataTypes.STRING(16),
        allowNull: true,
        unique: true,
      },
      nik_nip: {
        type: DataTypes.STRING(16),
        allowNull: true,
      },
      nama_lengkap: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      no_handphone: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      jenis_kelamin: {
        type: DataTypes.ENUM("laki-laki", "perempuan"),
        allowNull: true,
      },
      unit: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      departemen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      paket_mcu: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tanggal_pemeriksaan: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      perusahaan: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Patients",
      tableName: "patients",
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  )

  return Patients
}
