'use strict'

var mongoose =require('mongoose');
var CharacterSchema = Schema ({
    name: String,
    background: String,
    description: String,
    stats: {
        acuity: Number,
        body: Number,
        heart: Number,
        will: Number,
    },
    traits: JSON,
    relationships: JSON,
    belongings: JSON,
    img: String
});
module.exports = mongoose.model('Character',CharacterSchema);