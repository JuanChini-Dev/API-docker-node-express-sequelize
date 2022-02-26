const {Model, DataTypes, Sequelize} = require('sequelize')
const { PROVINCE_TABLE, Province } = require('./provinces.model')
const { COUNTRY_TABLE, Country } = require('./country.model')
const { STUDENT_TABLE, Student } = require('./student.model')
const LOCALITY_TABLE = 'localities'

const locality_schema = {
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    localityName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    ProvinceId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references:{
            model: Province,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}

class Locality extends Model {
    
    static assocciate(models) {
        this.belongsTo(models.Province)
        this.hasMany(models.Student, {
            foreignKey: 'LocalityId',
        })
    }

    static config (sequelize) {
        return {
            sequelize, 
            tableName: LOCALITY_TABLE,
            modelName: 'Locality',
            timestamps: false
        }
            
    }
}

module.exports = { LOCALITY_TABLE, locality_schema, Locality }