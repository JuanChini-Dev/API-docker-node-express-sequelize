const { Model, DataTypes, Sequelize } = require('sequelize')
const { COURSE_TABLE, Course} = require('./course.model')
const {MODALITY_TABLE, Modality} = require('./modality.model')
const {COURSE_STUDENT_TABLE, CourseStudent} = require('./courseStudent.model')
const COURSE_MODALITY_TABLE = 'courseModalities'

const course_modality_schema = {
    id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    CourseId: {
        field: 'IdCourse',
        allowNull: true,
        type: DataTypes.INTEGER,
        references:{
            model: Course,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    ModalityId:{
        field: 'IdModality',
        allowNull: true,
        type: DataTypes.INTEGER,
        references:{
            model: Modality,
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

}

class CourseModality extends Model {
    static assocciate(models) {
        // this.belongsTo(models.CourseStudent,{
        //     foreignKey: 'CourseModalityId',
        // })
        this.belongsTo(models.Modality),
        this.belongsTo(models.Course)
    }
    static config (sequelize) {
        return {
            sequelize, 
            tableName: COURSE_MODALITY_TABLE,
            modelName: 'CourseModality',
            timestamps: false
        }
            
    }
}

module.exports = { COURSE_MODALITY_TABLE, course_modality_schema, CourseModality }
