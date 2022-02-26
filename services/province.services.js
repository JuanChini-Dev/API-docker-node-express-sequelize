const { models } = require('./../libs/sequelize')

class ProvinceService {

    async create(data){
        const newProvince = await models.Province.create(data);
        return newProvince
    }

    async findAll(){
        const provinces = await models.Province.findAll({
            include: models.Country
        })
        return provinces
    }

    async findProvince(id){
        const province = await models.Province.findByPk(id)
        return province
    }


  
}

module.exports =  ProvinceService
