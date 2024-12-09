"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("family_histories", {
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
      riwayat_penyakit_jantung: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_hipertensi: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_kencing_manis: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_stroke: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_paru: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_kanker: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_gangguan_jiwa: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_ginjal: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_saluran_pencernaan: {
        type: Sequelize.STRING,
        defaultValue: "Tidak Ada",
        allowNull: false,
      },
      riwayat_penyakit_lainnya: {
        type: Sequelize.TEXT,
        defaultValue: "Tidak ada",
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
    await queryInterface.addIndex("family_histories", ["patient_id"], {
      name: "idx_family_histories_patient_id",
    })
  },

  async down(queryInterface, Sequelize) {
    // REMOVE RELATION
    await queryInterface.removeIndex(
      "family_histories",
      "idx_vital_signs_patient_id"
    )

    // DELETE TABLE
    await queryInterface.dropTable("family_histories")
  },
}
