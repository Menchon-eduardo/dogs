'use strict'

var express = require('express');
var UserController = require ('../controllers/user');

var router = express.Router();

router.post('/save-user', UserController.saveUser);
router.get('/user:name?/:password?', UserController.getUser);



module.exports = router;