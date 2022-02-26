const {Model, DataTypes, Sequelize} = require('sequelize')
const DISCOUNT_TABLE = 'discounts'

const discount_schema = {
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
}

class Discount extends Model {
    static assocciate(models) {

    }
    static config (sequelize) {
        return {
            sequelize, 
            tableName: DISCOUNT_TABLE,
            modelName: 'Discount',
            timestamps: false
        }
            
    }
}

module.exports = { DISCOUNT_TABLE, discount_schema, Discount }
