var bodyParser = require ('body-parser')
const Sequelize = require ('sequelize');
var productsModel = require ('./api/models/products');

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.use(bodyParser.json())

const sequelize = new Sequelize(dbName, root, password , {
    host :'localhost',
    dialect:'mysql'
});

sequelize
    .authenticate()
    .then(()=> {
        console.log('Connection has benn established successfully.');

    }).catch(err => {
        console.error('Unable to connect to the datbase:'+ err)
    })

    //Agregamos el controlador de productos a nuestra app de express
productsController(app, productsModel(sequelize))

app.listen(port);

console.log('todo list server started on: ' + port);


