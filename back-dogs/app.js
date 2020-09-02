'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//carga de archivos de rutas
var game_routes = require('./routes/game');
var character_routes = require('./routes/character');
var backgroundKind_routes = require('./routes/backgroundKind');
//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas
app.use(game_routes);
app.use(character_routes);
app.use(backgroundKind_routes);

//exportar
module.exports = app;