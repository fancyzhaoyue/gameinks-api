'use strict';
/**
 * Module dependencies.
 */
var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
  res.send('Gameinks API.');
});

module.exports = router;