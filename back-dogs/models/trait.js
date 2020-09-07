'use strict'

var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var TraitSchema = Schema ({
    name: String,
    number: Number,
    dice: String,
    character: String
    

});


module.exports = mongoose.model('Trait',TraitSchema);