'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kelas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      kodeKelas: {
        type: Sequelize.STRING
      },
      namaKelas: {
        type: Sequelize.STRING
      },
      idJurusan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jurusan',
          key: 'id'
        }
      },
      idWaliKelas: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'guru',
          key: 'id',
        }
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
    await queryInterface.dropTable('kelas');
  }
};