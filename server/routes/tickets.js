var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function (req, res) {
  models.Ticket.findAll().then(function (users) {
    res.json(users);
  });
});

router.post('/', function (req, res) {
  var deviceType = req.body.deviceType;
  var deviceSerialNo = req.body.deviceSerialNo;
  var deviceModel = req.body.deviceModel;
  var deviceScreenSize = req.body.deviceScreenSize;
  var contactName = req.body.contactName;
  var contactEmail = req.body.contactEmail;

  var ticket = models.Ticket.build({
    deviceType: deviceType,
    deviceSerialNo: deviceSerialNo,
    deviceModel: deviceModel,
    deviceScreenSize: deviceScreenSize,
    contactName: contactName,
    contactEmail: contactEmail
  });

  ticket.save()
    .then(function () {
      res.status(201).send('Ticket created successfully');
    }).catch(function (error) {
      res.status(400).send('There is a problem when trying to create a ticket : ' + error);
    });
});

router.put('/:id', function (req, res) {
  var deviceType = req.body.deviceType;
  var deviceSerialNo = req.body.deviceSerialNo;
  var deviceModel = req.body.deviceModel;
  var deviceScreenSize = req.body.deviceScreenSize;
  var contactName = req.body.contactName;
  var contactEmail = req.body.contactEmail;

  models.Ticket.findById(req.params.id).then(function (ticket) {
    if (ticket) {
      ticket.update({
        deviceType: deviceType,
        deviceSerialNo: deviceSerialNo,
        deviceModel: deviceModel,
        deviceScreenSize: deviceScreenSize,
        contactName: contactName,
        contactEmail: contactEmail
      }).then(function () {
        res.send('Ticket updated successfully');
      }).catch(function (error) {
        res.status(400).send('There is a problem when trying to update a ticket : ' + error);
      });
    } else {
      res.status(404).send('Ticket is not found');
    }
  });

});

router.get('/:id', function (req, res) {
  models.Ticket.findById(req.params.id).then(function (ticket) {
    if (ticket) {
      res.json(ticket);
    } else {
      res.status(404).send('Ticket is not found');
    }
  });
});

router.delete('/:id', function (req, res) {
  models.Ticket.destroy({ where: { id: req.params.id } }).then(function (ticketFound) {
    if (ticketFound) {
      res.send('Ticket deleted');
    } else {
      res.status(404).send('Ticket is not found');
    }
  });
});

module.exports = router;