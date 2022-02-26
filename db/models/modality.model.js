const {Model, DataTypes, Sequelize} = require('sequelize')
const MODALITY_TABLE = 'modalities'

const modality_schema = {
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
}

class Modality extends Model {
    static assocciate(models) {
        this.hasMany(models.CourseModality, {
            foreignKey: 'ModalityId'})
    }
    static config (sequelize) {
        return {
            sequelize, 
            tableName: MODALITY_TABLE,
            modelName: 'Modality',
            timestamps: false
        }
            
    }
}

module.exports = { MODALITY_TABLE, modality_schema, Modality }
