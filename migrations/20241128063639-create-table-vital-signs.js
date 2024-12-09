"use strict"

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("vital_signs", {
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
      sistolik: {
        type: Sequelize.INTEGER,
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      diastolik: {
        type: Sequelize.INTEGER,
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      nadi: {
        type: Sequelize.INTEGER,
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      rr: {
        type: Sequelize.INTEGER,
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      suhu_tubuh: {
        type: Sequelize.DECIMAL(5, 2),
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      spo2: {
        type: Sequelize.DECIMAL(5, 2),
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      berat_badan: {
        type: Sequelize.DECIMAL(5, 2),
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      tinggi_badan: {
        type: Sequelize.DECIMAL(5, 2),
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      lingkar_perut: {
        type: Sequelize.DECIMAL(5, 2),
        require: true,
        defaultValue: 0,
        allowNull: false,
      },
      visus_ka: {
        type: Sequelize.STRING,
        defaultValue: "20/20",
        allowNull: false,
      },
      visus_ki: {
        type: Sequelize.STRING,
        defaultValue: "20/20",
        allowNull: false,
      },
      bmi: {
        type: Sequelize.DECIMAL(5, 2),
        require: true,
        defaultValue: 0,
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
    await queryInterface.addIndex("vital_signs", ["patient_id"], {
      name: "idx_vital_signs_patient_id",
    })
  },

  async down(queryInterface, Sequelize) {
    // REMOVE RELATION
    await queryInterface.removeIndex(
      "vital_signs",
      "idx_vital_signs_patient_id"
    )

    // DELETE TABLE
    await queryInterface.dropTable("vital_signs")
  },
}

// id	UUID	Primary Key
// patient_id	UUID	Foreign Key ke patients
// kulit	TEXT	Pemeriksaan kulit
// kesadaran_umum	TEXT	Kesadaran umum
// kesadaran_mental	TEXT	Kesadaran mental
// mata	TEXT	Pemeriksaan mata
// buta_warna	INTEGER	1 untuk positif, 0 untuk negatif
// kelainan_mata	TEXT	Kelainan pada mata
// tht	TEXT	Pemeriksaan THT
// kepala_leher	TEXT	Pemeriksaan kepala & leher
// dada	TEXT	Pemeriksaan dada
// jantung	TEXT	Pemeriksaan jantung
// paru	TEXT	Pemeriksaan paru
// abdomen	TEXT	Pemeriksaan abdomen
// extrimitas	TEXT	Pemeriksaan extrimitas
