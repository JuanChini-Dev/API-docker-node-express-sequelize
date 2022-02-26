const { Model, DataTypes, Sequelize } = require('sequelize')
const { STUDENT_TABLE, Student } = require('./student.model')
const { DISCOUNT_TABLE, Discount } = require('./discount.model')
const { STATUS_TABLE, Status } = require('./status.model')
const { COURSE_MODALITY_TABLE, CourseModality} = require('./courseModality.model')
const COURSE_STUDENT_TABLE = 'courseStudents'

const course_student_schema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    date_init: {
        allowNull: true,
        type: DataTypes.STRING,
    },
    StudentId:{
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


}

class CourseStudent extends Model {
    static assocciate(models) {
        this.hasOne(models.CourseModality,{
            foreignKey: 'id',
        })
        this.belongsTo(models.Student)
    }
    static config (sequelize) {
        return {
            sequelize, 
            tableName: COURSE_STUDENT_TABLE,
            modelName: 'CourseStudent',
            timestamps: false
        }
            
    }
}

module.exports = { COURSE_STUDENT_TABLE, course_student_schema, CourseStudent }
