'use strict'

var express = require('express');
var BackgroundKindController = require ('../controllers/backgroundKind');

var router = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './uploads'});

router.post('/save-background', BackgroundKindController.saveBackgroundKind);
router.get('/background', BackgroundKindController.getBackgroundKind);
router.get('/backgrounds', BackgroundKindController.getBackgroundKinds);


module.exports = router;