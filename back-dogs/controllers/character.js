'use strict'

var Character = require ('../models/character');
var fs =require ('fs');

var controller = {
   
    saveCharacter: function(req, res) {
        var character = new Character();
        var params= req.body;
        character.game= params.game;
        character.name = params.name;
        character.background = params.background;
        character.description = params.description;
        character.acuity = params.acuity;
        character.body = params.body;
        character.heart = params.heart;
        character.will = params.will;
        character.traits = params.traits;
        character.relationships = params.relationships;
        character.belongings = params.belongings;
        character.file = params.file;
        character.pc = params.pc;
        
        

        character.save((err,characterStored) =>{
            if(err) return res.status(500).send({message: 'Error saving character', err});
            if(!characterStored) return res.status(404).send({message: "Cannot save the character", err});
            return res.status(200).send({character: characterStored});
        });

        return res.status(200).send({
            params: params,
            message: "save character working"})
    },
    getCharacter: function(req, res){
        var characterName= req.params.name;

        if(characterName == null){
            return res.status(404).send({message: "The charcter doesn't exists", err});
        };

        Character.findOne({"name":characterName}, (err, character) => {
            if(err) return res.status(500).send({message: "Error getting character"});
            if(!character) return res.status(404).send({message: "The character doesn't exists", err});
            return res.status(200).send({
                character
            });
        });
    },
    getCharactersInGame: function(req, res){
        var characterGame= req.params.game;

        if(characterGame == null){
            return res.status(404).send({message: "The charcter doesn't exists", err});
        };

        Character.find({game : characterGame}, (err, character) => {
            if(err) return res.status(500).send({message: "Error getting character"});
            if(!character) return res.status(404).send({message: "The character doesn't exists", err});
            return res.status(200).send({
                character
            });
        });
    },
    getCharacters: function(req, res) {
        Character.find({}).exec((err, character) => {
            if(err) return res.status(500).send({message: "Error getting characters"});
            if(!character) return res.status(404).send({message: "There is no characters", err});
            return res.status(200).send({character});
        });
    },
    updateCharacter: function(req,res){
        var characterId = req.params.id;
        var update = req.body;
        Character.findByIdAndUpdate(characterId, update, (err, characterUpdated) => {
            if(err) return res.status(500).send({message: "Error updating charcter"});
            if(!characterUpdated) return res.status(404).send({message: "There is no character", err});
            return res.status(200).send({
                character: characterUpdated
            });
        })

    },
    deleteCharacter: function (req, res) {
        var characterId = req.params.id;
        Character.findByIdAndDelete(characterId, (err, characterRemoved) => {
            if(err) return res.status(500).send({message: "Error deleting character", err});
            if(!characterRemoved) return res.status(404).send({message: "There is no character", err});
            return res.status(200).send({
                character: characterRemoved
            });
        })
    },
    uploadImage: function (req, res) {
        var characterId = req.params.id;
        var fileName = 'Imagen no subida...';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                
            Character.findByIdAndUpdate(characterId, {image: fileName}, {new: true}, (err, characterUpdated)=>{
                if(err) return res.status(500).send({message: "Image haven't been uploaded"});
                if(!characterUpdated) return res.status(404).send({message: "There is no character", err});
            
                return res.status(200).send({
                    character: characterUpdated
                })
            
            });
        }else{
            fs.unlink(filePath, (err)=>{
                return res.status(200).send({message: 'Not valid extension'});
            })
        }

            
        }else{
            return res.status(200).send({
                message: fileName
        });
    }
}
};

module.exports = controller;