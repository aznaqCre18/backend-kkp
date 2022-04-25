'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class guru extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ kelas }) {
      // define association here
      guru.hasOne(kelas, {
        foreignKey: 'idWaliKelas',
        as: 'kelas',
      })
    }
  }
  guru.init({
    nip: DataTypes.STRING,
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    tempatLahir: DataTypes.STRING,
    tanggalLahir: DataTypes.STRING,
    jenisKelamin: DataTypes.STRING,
    gelarDepan: DataTypes.STRING,
    gelarBelakang: DataTypes.STRING,
    alamat: DataTypes.TEXT,
    foto: DataTypes.STRING,
    mulaiBertugas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'guru',
    tableName: 'guru'
  });
  return guru;
};