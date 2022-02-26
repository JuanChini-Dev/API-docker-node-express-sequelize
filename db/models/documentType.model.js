const {Model, DataTypes, Sequelize} = require('sequelize')
const DOCUMENT_TYPE_TABLE = 'document_types'

const document_type_schema = {
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
}

class Document_Type extends Model {
    static assocciate(models) {
        this.hasMany(models.Student, {
            foreignKey: 'DocumentTypeId',
        })
        
       
    }
    static config (sequelize) {
        return {
            sequelize, 
            tableName: DOCUMENT_TYPE_TABLE,
            modelName: 'Document_Type',
            timestamps: false
        }
            
    }
}

module.exports = { DOCUMENT_TYPE_TABLE, document_type_schema, Document_Type }
