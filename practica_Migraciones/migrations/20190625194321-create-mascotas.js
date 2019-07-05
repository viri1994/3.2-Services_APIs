'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Mascotas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      raza: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.INTEGER
      },
      tamaño: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Mascotas');
  }
};