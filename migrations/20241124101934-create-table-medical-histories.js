"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("medical_histories", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      patient_id: {
        type: Sequelize.UUID,
        allowNull: false,
        require: true,
        unique: true,
        references: {
          model: "patients",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      riwayat_hepatitis: {
        type: Sequelize.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_pengobatan_tbc: {
        type: Sequelize.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      hipertensi: {
        type: Sequelize.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      kencing_manis: {
        type: Sequelize.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      batuk_menahun: {
        type: Sequelize.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_operasi: {
        type: Sequelize.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_rawat_inap: {
        type: Sequelize.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_alergi: {
        type: Sequelize.ENUM("Tidak Ada", "Ada"),
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      lain_lain: {
        type: Sequelize.TEXT,
        defaultValue: "Tidak Ada",
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
    await queryInterface.addIndex("medical_histories", ["patient_id"], {
      name: "idx_medical_histories_patient_id",
    })
  },

  async down(queryInterface, Sequelize) {
    // REMOVE RELATION
    await queryInterface.removeIndex(
      "medical_histories",
      "idx_vital_signs_patient_id"
    )

    // DELETE TABLE
    await queryInterface.dropTable("medical_histories")
  },
}
