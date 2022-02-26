const { models } = require('../libs/sequelize')
class CountryServices {

    async create(data){
        const newCountry = await models.Country.create(data);
        return newCountry
    }

    async findAll(){
        const countries = await models.Country.findAll({
            include: models.Province, include: models.Locality
        })
        return countries
    }

  
}

module.exports =  CountryServices