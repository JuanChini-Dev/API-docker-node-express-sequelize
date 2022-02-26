const {Model, DataTypes, Sequelize} = require('sequelize')
const { Locality } = require('./locality.model')
const { Document_Type } = require('./documentType.model')
const STUDENT_TABLE = 'students'

const student_schema = {
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
            model: Document_Type,
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
            model: Locality,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}

class Student extends Model {
    
    static assocciate(models) {
        this.belongsTo(models.Locality)
        this.belongsTo(models.Document_Type)
        this.hasMany(models.CourseStudent, {
            foreignKey: 'StudentId'})
    }

    static config (sequelize) {
        return {
            sequelize, 
            tableName: STUDENT_TABLE,
            modelName: 'Student',
            timestamps: false
        }
            
    }
}

module.exports = { STUDENT_TABLE, student_schema, Student }