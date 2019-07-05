'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mascotas = sequelize.define('Mascotas', {
    raza: DataTypes.STRING,
    precio: DataTypes.INTEGER,
    tamaño: DataTypes.STRING,
    color: DataTypes.STRING,
    sexo: DataTypes.STRING
  }, {});
  Mascotas.associate = function(models) {
    // associations can be defined here
  };
  return Mascotas;
};