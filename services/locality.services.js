const { models } = require('../libs/sequelize')

class LocalityService {

    async create(data){
        const newLocality = await models.Locality.create(data);
        return newLocality
    }

    async findAll(){
        const localities = await models.Locality.findAll()
        return localities
    }

    async findLocality(id){
        const locality = await models.Locality.findByPk(id, {
            include: [models.Province]
        })
        return locality
    }


  
}

module.exports =  LocalityService
