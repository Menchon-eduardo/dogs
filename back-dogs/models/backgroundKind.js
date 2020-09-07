'use strict'

var mongoose =require('mongoose');
var Schema = mongoose.Schema;
var BackgroundKindSchema = Schema ({
    name: String,
    stats: Number,
    traits: Array,
    relationships: Array
});


module.exports = mongoose.model('BackgroundKind',BackgroundKindSchema);