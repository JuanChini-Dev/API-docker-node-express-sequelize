const { models } = require('../libs/sequelize')

class StudentService {

    async create(data){
        const newStudent = await models.Student.create(data);
        return newStudent
    }

    async findAll(){
        const students = await models.Student.findAll()
        return students
    }

    async findStudent(id){
        const student = await models.Student.findByPk(id, {
            include: {
                model: models.Locality,
                    // include: {
                    //     model: models.Province,
                    //         include: models.Country
                    //     }
                }
        })
        return student
    }
}

module.exports =  StudentService
