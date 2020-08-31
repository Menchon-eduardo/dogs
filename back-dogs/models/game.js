'use strict'

var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var GameSchema = Schema ({
    name: String,
    master: String,
    sinopsis: String,
    numPlayers: Number

});


module.exports = mongoose.model('Game',GameSchema);