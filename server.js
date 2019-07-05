var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

console.log('sequelize loaded');

const Sequelize = require ('sequelize');

//Opcion 1

var dbName= 'practicaorm';
var dbPass= 'root';
var dbUser = 'example';

const sequelize = new Sequelize('practicaorm', 'root', 'example', {
    host: 'localhost',
    dialect:'mysql'
});

app.listen(port);