const { models } = require('../libs/sequelize')
class ModalityServices {

    async create(data){
        const newModality = await models.Modality.create(data);
        return newModality
    }

    async findAll(){
        const modality = await models.Modality.findAll()
        return modality
    } 
}

module.exports =  ModalityServices
