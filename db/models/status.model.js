const {Model, DataTypes, Sequelize} = require('sequelize')
const STATUS_TABLE = 'statues'

const status_schema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    statusName: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true
    }
}

class Status extends Model {
    static assocciate(models) {

    }
    static config (sequelize) {
        return {
            sequelize, 
            tableName: STATUS_TABLE,
            modelName: 'Status',
            timestamps: false
        }
            
    }
}

module.exports = { STATUS_TABLE, status_schema, Status }
