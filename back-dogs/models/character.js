'use strict'

var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var CharacterSchema = Schema ({
    game: String,
    name: String,
    background: String,
    description: String,
    acuity: Number,
    body: Number,
    heart: Number,
    will: Number,
    traits: Array,
    relationships: Array,
    belongings: Array,
    img: String,
    pc: Boolean
});

    

module.exports = mongoose.model('Character',CharacterSchema);

        
