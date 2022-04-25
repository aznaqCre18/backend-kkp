'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jurusan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ siswa, kelas }) {
      // define association here
      jurusan.hasMany(siswa, {
        foreignKey: 'idJurusan',
        as: 'siswa',
      });

      jurusan.hasMany(kelas, {
        foreignKey: 'idJurusan',
        as: 'kelas'
      })
    }
  }
  jurusan.init({
    kodeJurusan: DataTypes.STRING,
    namaJurusan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jurusan',
    tableName: 'jurusan'
  });
  return jurusan;
};