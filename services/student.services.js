const { models } = require('../libs/sequelize')
const bcript = require('bcrypt');


class StudentService {

    async create(data){
        const hash = await bcript.hash(data.email, 10)
        const newStudent = await models.Student.create({
            ...data,
            email: hash
        });
        delete newStudent.dataValues.email;
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
