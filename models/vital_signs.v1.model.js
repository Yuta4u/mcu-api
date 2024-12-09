"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class VitalSign extends Model {
    static associate(models) {
      this.belongsTo(models.Patients, {
        foreignKey: "patient_id",
      })
    }
  }

  VitalSign.init(
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
      sistolik: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      diastolik: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      nadi: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      rr: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      suhu_tubuh: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0,
        allowNull: false,
      },
      spo2: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0,
        allowNull: false,
      },
      berat_badan: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0,
        allowNull: false,
      },
      tinggi_badan: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0,
        allowNull: false,
      },
      lingkar_perut: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0,
        allowNull: false,
      },
      visus_ka: {
        type: DataTypes.STRING,
        defaultValue: "20/20",
        allowNull: false,
      },
      visus_ki: {
        type: DataTypes.STRING,
        defaultValue: "20/20",
        allowNull: false,
      },
      bmi: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0,
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
      modelName: "VitalSign",
      tableName: "vital_signs",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  )

  return VitalSign
}
