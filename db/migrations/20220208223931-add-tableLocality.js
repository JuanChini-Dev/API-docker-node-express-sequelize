'use strict'
const { LOCALITY_TABLE, Locality } = require('./../models/locality.model')
const { PROVINCE_TABLE, Province } = require('./../models/provinces.model')

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable(LOCALITY_TABLE, {
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  localityName: {
      allowNull: false,
      type: Sequelize.STRING
  },
  ProvinceId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 1,
      references:{
          model: PROVINCE_TABLE,
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
  }
  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(LOCALITY_TABLE)
  }
};
