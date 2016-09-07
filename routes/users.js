var express = require('express');
var router = express.Router();
var http = require('http');
var mockJson = require('../mock/users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
	console.log(mockJson);
  res.send(mockJson);
});

module.exports = router;
