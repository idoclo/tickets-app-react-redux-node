'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ticket = sequelize.define('Ticket', {
    deviceType: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Device type cannot be empty"}
      }
    },
    deviceSerialNo: DataTypes.STRING,
    deviceModel: DataTypes.STRING,
    deviceScreenSize: DataTypes.STRING,
    contactName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Contact name cannot be empty"}
      }
    },
    contactEmail: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {args: true, msg: "Contact email cannot be empty"},
        isEmail: {args: true, msg: "Contact email is not a valid email"}
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Ticket;
};