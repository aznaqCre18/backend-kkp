'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('siswa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nis: {
        type: Sequelize.STRING
      },
      nisn: {
        type: Sequelize.STRING
      },
      namaLengkap: {
        type: Sequelize.STRING
      },
      tempatLahir: {
        type: Sequelize.STRING
      },
      tanggalLahir: {
        type: Sequelize.STRING
      },
      jenisKelamin: {
        type: Sequelize.STRING
      },
      idJurusan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jurusan',
          key: 'id',
        }
      },
      idKelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'kelas',
          key: 'id',
        }
      },
      namaWaliMurid: {
        type: Sequelize.STRING
      },
      alamat: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('siswa');
  }
};