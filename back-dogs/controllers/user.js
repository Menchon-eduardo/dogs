'use strict'

var User = require ('../models/user');
var fs =require ('fs');

var controller = {

    saveUser: function(req, res) {
        var user = new User();
        var params= req.body;
        user.name = params.name;
        user.password = params.password;

        user.save((err,gameStored) =>{
            if(err) return res.status(500).send({message: 'Error saving user', err});
            if(!gameStored) return res.status(404).send({message: "Cannot save the user", err});
            return res.status(200).send({game: gameStored});
        });

        return res.status(200).send({
            params: params,
            message: "save user working"})
    },
    getUser: function(req, res){
        var userName =req.params.name;
       
        if(userName == null){
            return res.status(404).send({message: "The user doesn't exists", err});
        };

        User.findOne({"name":userName}, function(err, user) {
            if(err) return res.status(500).send({message: "Error getting user"});
            if(!user) return res.status(404).send({message: "The user doesn't exists", err});
            return res.status(200).send({user});
        });
    },



};

module.exports = controller;