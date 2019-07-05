const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Users = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        nickname: {
            type: Sequelize.STRING,
            allowNull: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pais: {
            type: Sequelize.STRING,
            allowNull: true
        },


    }, { timestamps: false });

    return Users;
}























