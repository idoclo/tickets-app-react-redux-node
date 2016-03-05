'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ticket = sequelize.define('Ticket', {
    device_type: DataTypes.STRING,
    device_serial_no: DataTypes.STRING,
    device_model: DataTypes.STRING,
    device_screen_size: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    contact_email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ticket;
};