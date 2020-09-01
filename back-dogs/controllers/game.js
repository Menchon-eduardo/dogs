'use strict'

var Game = require ('../models/game');
var fs =require ('fs');

var controller = {
    home: function (req, res){
        return res.status(200).send({message: 'Soy home'});

    },
    test: function(req, res){
        return res.status(200).send({message: 'Soy test'});

    },

    saveGame: function(req, res) {
        var game = new Game();
        var params= req.body;
        game.name = params.name;
        game.master = params.master;
        game.sinopsis = params.sinopsis;
        game.numPlayers = params.numPlayers;

        game.save((err,gameStored) =>{
            if(err) return res.status(500).send({message: 'Error saving game', err});
            if(!gameStored) return res.status(404).send({message: "Cannot save the game", err});
            return res.status(200).send({game: gameStored});
        });

        return res.status(200).send({
            params: params,
            message: "save game working"})
    },
    getGame: function(req, res){
        var gameName =req.params.name;
        var gameId= req.params.id;

        if(gameName == null){
            return res.status(404).send({message: "The game doesn't exists", err});
        };

        Game.findOne({"name":gameName}, function(err, game) {
            if(err) return res.status(500).send({message: "Error getting game"});
            if(!game) return res.status(404).send({message: "The game doesn't exists", err});
            return res.status(200).send({game});
        });
    },
    getGames: function(req, res) {
        Game.find({}).exec((err, games) => {
            if(err) return res.status(500).send({message: "Error getting games"});
            if(!games) return res.status(404).send({message: "There is no games", err});
            return res.status(200).send({games});
        });
    },
    updateGame: function(req,res){
        var gametId = req.params.id;
        var update = req.body;
        Game.findByIdAndUpdate(gameId, update, (err, gameUpdated) => {
            if(err) return res.status(500).send({message: "Error updating games"});
            if(!gameUpdated) return res.status(404).send({message: "There is no game", err});
            return res.status(200).send({
                game: gameUpdated
            });
        })

    },
    deleteGame: function (req, res) {
        var gameId = req.params.id;
        Game.findByIdAndDelete(gameId, (err, gameRemoved) => {
            if(err) return res.status(500).send({message: "Error deleting games", err});
            if(!gameRemoved) return res.status(404).send({message: "There is no game", err});
            return res.status(200).send({
                game: gameRemoved
            });
        })
    },
    uploadImage: function (req, res) {
        var gameId = req.params.id;
        var fileName = 'Imagen no subida...';

        if(req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('\.');
            var fileExt = extSplit[1];

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){
                
            Game.findByIdAndUpdate(gameId, {image: fileName}, {new: true}, (err, gameUpdated)=>{
                if(err) return res.status(500).send({message: "Image haven't been uploaded"});
                if(!gameUpdated) return res.status(404).send({message: "There is no game", err});
            
                return res.status(200).send({
                game: gameUpdated
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