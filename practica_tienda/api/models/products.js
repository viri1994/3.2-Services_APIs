const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Products = sequelize.define('products', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey:true,
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        precio: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        existencia: {
            type: Sequelize.STRING,
            allowNull: false
        },

        cantidad: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: true
        },

    }, {timestamps: false});

    return Products;
}
