var express = require('express');
var router = express.Router();
var models  = require('../models');

router.get('/', function(req, res, next) {
  models.Ticket.findAll().then(function(users){
    res.json(users);
  });
});

router.post('/', function(req, res) {
  var device_type = req.body.device_type;
  var device_serial_no = req.body.device_serial_no;
  var device_model = req.body.device_model;
  var device_screen_size = req.body.device_screen_size;
  var contact_name = req.body.contact_name;
  var contact_email = req.body.contact_email;

  var ticket = models.Ticket.build({
    device_type: device_type,
    device_serial_no: device_serial_no,
    device_model: device_model,
    device_screen_size: device_screen_size,
    contact_name: contact_name,
    contact_email: contact_email
  });

  ticket.save()
    .then(function() {
      res.status(201).send('Ticket created successfully');
  }).catch(function(error) {
    res.status(400).send('There is a problem when trying to create a ticket : ' + error);
  });
});

router.get('/:id', function(req, res) {
  models.Ticket.findById(req.params.id).then(function(ticket) {
    if(ticket) {
      res.json(ticket);
    } else {
      res.status(404).send('Ticket is not found');
    }
  });
});

router.delete('/:id', function(req, res) {
  models.Ticket.destroy({where: {id: req.params.id}}).then(function(ticketFound) {
    if(ticketFound) {
      res.send('Ticket deleted');
    } else {
      res.status(404).send('Ticket is not found');
    }
  });
});

module.exports = router;