'use strict'

var express = require('express');
var GameController = require ('../controllers/game');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

router.get('/home', GameController.home);
router.post('/save', GameController.saveGame);
router.get('/games', GameController.getGames);
router.get('/game:name?', GameController.getGame);
router.delete('/delete:id', GameController.deleteGame);
router.post('/upload-image/:id', multipartMiddleware, GameController.uploadImage);

module.exports = router;