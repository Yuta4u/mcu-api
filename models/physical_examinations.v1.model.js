"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
  class PhysicalExamination extends Model {
    static associate(models) {
      this.belongsTo(models.Patients, {
        foreignKey: "patient_id",
      })
    }
  }

  PhysicalExamination.init(
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
          model: "PhysicalExamination",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      kulit: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kesadaran_umum: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kesadaran_mental: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      mata: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      buta_warna: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kelainan_mata: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      telinga: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      hidung: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      tenggorokan: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      sinus: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      tonsil: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      lidah: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      gusi: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      gigi: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kelenjar_limfe: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kelenjar_tiroid: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      jantung: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      paru: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      tulang_belakang: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      perabaan: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      hati: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      ginjal: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      extrimitas: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      neurologis: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      musuculoskeletal: {
        type: DataTypes.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PhysicalExamination",
      tableName: "physical_examinations",
      timestamps: true,
      underscored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  )

  return PhysicalExamination
}
