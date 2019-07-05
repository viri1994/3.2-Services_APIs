var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

console.log('sequelize loaded');

var UserModel = require('./Models/usuarios');
const Sequelize = require ('sequelize');

//Opcion 1

//var dbName= 'practicaorm';
//var dbPass= 'root';
//var dbUser = 'example';

const sequelize = new Sequelize('practicaorm', 'root', '1234', {
    host: 'localhost',
    dialect:'mysql'
});

var userCrud = UserModel(sequelize);

//crearUsuario();
//listarUsuarios();
//actualizarUsuario();
eliminar();


app.listen(port);

function crearUsuario() {
    var usuarioNuevo = {
        nombre: 'test',
        nickname: 'test nick name',
        email: 'algo@svg.com',
        pais: 'mx'
    }
        userCrud.create(usuarioNuevo).then(res => {
            console.log('creado...');
            console.log(res);
        })
    }


//Listar Usuario

function listarUsuarios(){
    userCrud.findAll().then(res =>{
        console.log('listando')
        console.log('res')
    })
}


//Actualizar Usuario
function actualizarUsuario(){
    var usuarioNuevo={
        nombre:'test editado',
        nickname:'nick name editado',
        email:'correoeditado@gmail.com',
        pais:'mx'
    }
    userCrud.update(usuarioNuevo,{
        where:{
            id:1
        }
    }).then(res =>{
        console.log('actualizado')
    })
};

//eliminar usuario
    function eliminar (){
        userCrud.destroy({
            where:{
                id:2
            }

        }).then(()=>{
            console.log('eliminado...')
        })
    }


