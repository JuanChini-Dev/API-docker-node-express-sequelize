const {Model, DataTypes, Sequelize} = require('sequelize')
const { COUNTRY_TABLE, Country } = require('./country.model')
const PROVINCE_TABLE = 'provinces'

const province_schema = {
    id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    provinceName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    CountryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1,
        references:{
            model: Country,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    }
}

class Province extends Model {
    
    static assocciate(models) {
        this.belongsTo(models.Country, {
        })
        this.hasMany(models.Locality, {
            foreignKey: 'ProvinceId'})
    }

    static config (sequelize) {
        return {
            sequelize, 
            tableName: PROVINCE_TABLE,
            modelName: 'Province',
            timestamps: false
        }           
    }
}

module.exports = { PROVINCE_TABLE, province_schema, Province }