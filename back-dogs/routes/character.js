'use strict'

var express = require('express');
var CharacterController = require ('../controllers/character');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

router.post('/save-character', CharacterController.saveCharacter);
router.get('/characters', CharacterController.getCharacters);
router.get('/characters:game', CharacterController.getCharactersInGame);
router.get('/game:name?', CharacterController.getCharacter);
router.delete('/delete-character:id', CharacterController.deleteCharacter);
router.post('/upload-image-character/:id', multipartMiddleware, CharacterController.uploadImage);

module.exports = router;