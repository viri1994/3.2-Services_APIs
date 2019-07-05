const Sequelize = require ('sequelize');
module.exports = (sequelize) => {
        const Usuario = sequelize.define('usuarios',{

      

    id: {
        type: Sequelize.INTEGER,
        primaryKey:true, 
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    rol: {
        type: Sequelize.STRING,
        allowNull: false
    },
    area: {
        type: Sequelize.STRING,
        allowNull: false
    },
    contraseña: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ubicacion: {
        type: Sequelize.STRING,
        allowNull:false
    },
    usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, {timestamps: false});

return Usuario;
}