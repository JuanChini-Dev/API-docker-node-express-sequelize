const {Model, DataTypes, Sequelize} = require('sequelize')
const COURSE_TABLE = 'courses'

const course_schema = {
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
}

class Course extends Model {
    static assocciate(models) {
        this.hasMany(models.CourseModality, {
            foreignKey: 'CourseId'})
    }
    static config (sequelize) {
        return {
            sequelize, 
            tableName: COURSE_TABLE,
            modelName: 'Course',
            timestamps: false
        }
            
    }
}

module.exports = { COURSE_TABLE, course_schema, Course }
