'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ jurusan, kelas }) {
      // define association here
      siswa.belongsTo(jurusan, {
        foreignKey: 'idJurusan',
        as: 'jurusan',
      });

      siswa.belongsTo(kelas, {
        foreignKey: 'idKelas',
        as: 'kelas'
      })
    }
  }
  siswa.init({
    nis: DataTypes.STRING,
    nisn: DataTypes.STRING,
    namaLengkap: DataTypes.STRING,
    tempatLahir: DataTypes.STRING,
    tanggalLahir: DataTypes.STRING,
    jenisKelamin: DataTypes.STRING,
    idJurusan: DataTypes.INTEGER,
    idKelas: DataTypes.INTEGER,
    namaWaliMurid: DataTypes.STRING,
    alamat: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: 'siswa'
  });
  return siswa;
};