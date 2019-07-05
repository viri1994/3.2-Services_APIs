var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var tokenController = require('./app/controllers/tokenController');
var userModel = require('./app/models/userModel');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.json());

const sequelize = new Sequelize('practicaapi', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has benn established successfully.');

    }).catch(err => {
        console.error('Unable to connect to the datbase:' + err)
    });
tokenController(app, userModel(sequelize));

app.listen(port);

console.log('todo listo API server iniciando en el puerto:' + port);