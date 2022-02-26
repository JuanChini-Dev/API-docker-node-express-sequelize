'use strict';
const {COUNTRY_TABLE, Country} = require('./../models/country.model');
const {PROVINCE_TABLE, Province} = require('./../models/provinces.model')
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(COUNTRY_TABLE, {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      countryName: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }),
    await queryInterface.createTable(PROVINCE_TABLE, {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      provinceName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      countryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: COUNTRY_TABLE,
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }

      }
    )},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(PROVINCE_TABLE)
    await queryInterface.dropTable(COUNTRY_TABLE)
  }
};
