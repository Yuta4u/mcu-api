"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("physical_examinations", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      patient_id: {
        type: Sequelize.UUID,
        allowNull: false,
        unique: true,
        references: {
          model: "patients",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      kulit: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kesadaran_umum: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kesadaran_mental: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      mata: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      buta_warna: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kelainan_mata: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      telinga: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      hidung: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      tenggorokan: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      sinus: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      tonsil: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      lidah: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      gusi: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      gigi: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kelenjar_limfe: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      kelenjar_tiroid: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      jantung: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      paru: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      tulang_belakang: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      perabaan: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      hati: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      ginjal: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      extrimitas: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      neurologis: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      musuculoskeletal: {
        type: Sequelize.TEXT,
        defaultValue: "Dalam Batas Normal",
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    })
    await queryInterface.addIndex("physical_examinations", ["patient_id"], {
      name: "idx_physical_examinations_patient_id",
    })
  },

  async down(queryInterface, Sequelize) {
    // REMOVE RELATION
    await queryInterface.removeIndex(
      "physical_examinations",
      "idx_physical_examinations_patient_id"
    )

    // DELETE TABLE
    await queryInterface.dropTable("physical_examinations")
  },
}
