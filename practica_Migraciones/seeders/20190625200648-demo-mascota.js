'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mascotas',
      [{
        raza: 'Chihuahua',
        precio: 200,
        tamaño: 'chico',
        color: 'negro',
        sexo: 'hembra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        raza: 'Tortuga',
        precio: 100,
        tamaño: 'chico',
        color: 'verde',
        sexo: 'hembra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        raza: 'Maltes',
        precio: 200,
        tamaño: 'chico',
        color: 'negro',
        sexo: 'hembra',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        raza: 'Perico',
        precio: 300,
        tamaño: 'chico',
        color: 'amarillo',
        sexo: 'hembra',
        createdAt: new Date(),
        updatedAt: new Date()
      }

      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Mascota', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
