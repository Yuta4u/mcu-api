"use strict"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("patients", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
      },
      medical_id: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
        unique: true,
      },
      ktp: {
        type: Sequelize.STRING(16),
        require: true,
        allowNull: true,
        unique: true,
      },
      nik_nip: {
        type: Sequelize.STRING(16),
        require: true,
        allowNull: true,
        unique: true,
      },
      nama_lengkap: {
        type: Sequelize.STRING,
        require: true,
        allowNull: true,
      },
      tanggal_lahir: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
      },
      no_handphone: {
        type: Sequelize.STRING,
        require: true,
        allowNull: true,
        unique: true,
      },
      jenis_kelamin: {
        type: Sequelize.ENUM("laki-laki", "perempuan"),
        require: true,
        allowNull: true,
        defaultValue: null,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      departemen: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      paket_mcu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tanggal_pemeriksaan: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      perusahaan: {
        type: Sequelize.STRING,
        allowNull: true,
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
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("patients")
  },
}
