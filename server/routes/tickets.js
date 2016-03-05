var express = require('express');
var router = express.Router();
var models  = require('../models');

router.get('/', function(req, res, next) {
  models.Ticket.findAll().then(function(users){
    res.send('I have ' + users.length + ' tickets');

  });
});

module.exports = router;