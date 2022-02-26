'use strict';
const { DataTypes } = require('sequelize');
const { LOCALITY_TABLE } = require('../models/locality.model');
const { DOCUMENT_TYPE_TABLE } = require('./../models/documentType.model')
const { STUDENT_TABLE} = require('./../models/student.model')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(DOCUMENT_TYPE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    document_type_description: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
    }
    }),
    await queryInterface.createTable(STUDENT_TABLE, {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: false
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    phone:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    email:{
        allowNull: false,
        type: DataTypes.STRING,
    }, 
    DocumentTypeId:{
        allowNull: false, 
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references: {
            model: DOCUMENT_TYPE_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },    
    LocalityId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references:{
            model: LOCALITY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(STUDENT_TABLE)
    await queryInterface.dropTable(DOCUMENT_TYPE_TABLE)
  }
};
