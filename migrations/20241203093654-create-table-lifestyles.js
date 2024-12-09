"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("life_styles", {
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
      minum_alkohol: {
        type: Sequelize.STRING,
        require: true,
        defaultValue: "Tidak",
        allowNull: false,
      },
      merokok: {
        type: Sequelize.STRING,
        require: true,
        defaultValue: "Tidak",
        allowNull: false,
      },
      olahraga: {
        type: Sequelize.STRING,
        require: true,
        defaultValue: "Tidak",
        allowNull: false,
      },
      jenis_olahraga: {
        type: Sequelize.STRING,
        require: true,
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
    await queryInterface.addIndex("life_styles", ["patient_id"], {
      name: "idx_life_styles_patient_id",
    })
  },

  async down(queryInterface, Sequelize) {
    // REMOVE RELATION
    await queryInterface.removeIndex(
      "life_styles",
      "idx_life_styles_patient_id"
    )

    // DELETE TABLE
    await queryInterface.dropTable("life_styles")
  },
}
