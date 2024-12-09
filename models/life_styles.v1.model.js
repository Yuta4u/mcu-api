"use strict"

const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class LifeStyle extends Model {
    static associate(models) {
      this.belongsTo(models.Patients, {
        foreignKey: "patient_id",
      })
    }
  }

  LifeStyle.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      patient_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: "patients",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      minum_alkohol: {
        type: DataTypes.STRING,
        require: true,
        defaultValue: "Tidak",
        allowNull: false,
      },
      merokok: {
        type: DataTypes.STRING,
        require: true,
        defaultValue: "Tidak",
        allowNull: false,
      },
      olahraga: {
        type: DataTypes.STRING,
        require: true,
        defaultValue: "Tidak",
        allowNull: false,
      },
      jenis_olahraga: {
        type: DataTypes.STRING,
        require: true,
        defaultValue: "Tidak ada",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "LifeStyle",
      tableName: "life_styles",
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  )

  return LifeStyle
}
