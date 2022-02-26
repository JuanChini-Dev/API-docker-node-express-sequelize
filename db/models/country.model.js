const {Model, DataTypes, Sequelize} = require('sequelize')
const COUNTRY_TABLE = 'countries'

const country_schema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    countryName: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
    }
}

class Country extends Model {
    static assocciate(models) {
        this.hasMany(models.Province), { 
            foreignKey: 'CountryId'}
    }
    static config (sequelize) {
        return {
            sequelize, 
            tableName: COUNTRY_TABLE,
            modelName: 'Country',
            timestamps: false
        }
            
    }
}

module.exports = { COUNTRY_TABLE, country_schema, Country }
