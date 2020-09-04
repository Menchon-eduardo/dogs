'use strict'

var BackgroundKind = require ('../models/backgroundKind');
var fs =require ('fs');

var controller = {
   
    saveBackgroundKind: function(req, res) {
        var backgroundKind = new BackgroundKind();
        var params= req.body;
        backgroundKind.name = params.name;
        backgroundKind.stats = params.stats;
        backgroundKind.treats = params.treats;
        backgroundKind.relationships = params.relationships;
        
        

        backgroundKind.save((err,backgroundKindStored) =>{
            if(err) return res.status(500).send({message: 'Error saving backgroundKind', err});
            if(!backgroundKindStored) return res.status(404).send({message: "Cannot save the backgroundKind", err});
            return res.status(200).send({character: backgroundKindStored});
        });
    },
    getBackgroundKind: function(req, res){
        var backgroundKindName= req.params.name;

        if(backgroundKindName == null){
            return res.status(404).send({message: "The backgroundKind doesn't exists", err});
        };

        BackgroundKind.findOne({"name":backgroundKindName}, (err, backgroundKind) => {
            if(err) return res.status(500).send({message: "Error getting backgroundKind"});
            if(!backgroundKind) return res.status(404).send({message: "The backgroundKind doesn't exists", err});
            return res.status(200).send({
                backgroundKind
            });
        });
    },
    getBackgroundKinds: function(req, res) {
        BackgroundKind.find({}).exec((err, backgroundKind) => {
            if(err) return res.status(500).send({message: "Error getting backgroundKind",err});
            if(!backgroundKind) return res.status(404).send({message: "There is no backgroundKind", err});
            return res.status(200).send({backgroundKind});
        });
    }
}
    module.exports = controller;