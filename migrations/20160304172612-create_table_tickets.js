'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'tickets',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        createdAt: {
          type: Sequelize.DATE
        },
        updatedAt: {
          type: Sequelize.DATE
        },
        device_type: Sequelize.STRING,
        device_serial_no: Sequelize.INTEGER,
        device_model: Sequelize.STRING,
        device_screen_size: Sequelize.STRING,
        contact_name: Sequelize.STRING,
        contact_email: Sequelize.STRING
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('tickets')
  }
};
