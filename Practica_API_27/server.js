var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

var UsuariosModel = require ('./app/models/UsuariosModel');
var TokenController = require('./app/controller/TokenController');
var ClientesController = require('./app/controller/ClientesController');
var ClientesModel = require ('./app/models/ClientesModel');

var express = require('express'),
app = express (),
port = process.env.PORT || 3000;

app.use(bodyParser);

const sequelize = new Sequelize('practica_API_27', 'root', '1234',{
    host:'localhost',
    dialect:'mysql'

});

sequelize


app.listen(port);

console.log('El servidor esta corriendo'+ port);