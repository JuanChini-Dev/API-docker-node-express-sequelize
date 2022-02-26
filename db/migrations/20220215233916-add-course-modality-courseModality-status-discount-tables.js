'use strict';
const { DataTypes } = require('sequelize');
const { DISCOUNT_TABLE, Discount } = require('./../models/discount.model')
const { STATUS_TABLE, Status } = require('./../models/status.model')
const { COURSE_TABLE, Course } = require('./../models/course.model')
const { MODALITY_TABLE, Modality } = require('./../models/modality.model')
const { STUDENT_TABLE, Student} = require('./../models/student.model')
const { COURSE_MODALITY_TABLE, CourseModality} = require('./../models/courseModality.model')
const { COURSE_STUDENT_TABLE, CourseStudent} = require('./../models/courseStudent.model')



module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(COURSE_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    courseName: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
    }
    }),

    await queryInterface.createTable(MODALITY_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    modalityName: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
    }
  })
  await queryInterface.createTable(DISCOUNT_TABLE, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
  discountName: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
  }
  }),
  await queryInterface.createTable(STATUS_TABLE, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
    statusName: {
      allowNull: true,
      type: DataTypes.STRING,
      unique: true
  }
  }),
  await queryInterface.createTable(COURSE_MODALITY_TABLE, {
    id: {
      allowNull: false,
      autoIncrement: false,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
  IdCourse: {
      allowNull: true,
      type: DataTypes.INTEGER,
      references:{
          model: COURSE_TABLE,
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
  },
  IdModality:{
      allowNull: true,
      type: DataTypes.INTEGER,
      references:{
          model: MODALITY_TABLE,
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

  },
  year: {
      allowNull: true,
      type: DataTypes.INTEGER,
  },
  countInvoice:{
      allowNull: true,
      type: DataTypes.INTEGER,
  },
  monthInit:{
      allowNull: true,
      type: DataTypes.INTEGER,

  },
  inscriptionValue:{
      allowNull: true,
      type: DataTypes.DOUBLE,
  },
  courseValue:{
      allowNull: true,
      type: DataTypes.DOUBLE,
  },
  activeCourse:{
      allowNull: true,
      type: DataTypes.BOOLEAN,
  }
  }),
  await queryInterface.createTable(COURSE_STUDENT_TABLE, {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
  },
  date_init: {
      allowNull: true,
      type: DataTypes.DATE,
  },
  StudentId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
          model: STUDENT_TABLE,
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'


  },
  CourseModalityId:{
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
          model: COURSE_MODALITY_TABLE,
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

  },
  DiscountId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
          model: DISCOUNT_TABLE,
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'

  },
  StatusId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
          model: STATUS_TABLE,
          key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
      
    },
  })

  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(COURSE_STUDENT_TABLE),
    await queryInterface.dropTable(COURSE_MODALITY_TABLE),
    await queryInterface.dropTable(STATUS_TABLE),
    await queryInterface.dropTable(DISCOUNT_TABLE),
    await queryInterface.dropTable(MODALITY_TABLE),
    await queryInterface.dropTable(COURSE_TABLE)

  }
};
