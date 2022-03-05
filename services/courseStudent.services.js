const { models } = require('../libs/sequelize')
const bcript = require('bcrypt');

class CourseStudentService {

    async create(data){
        const newCourseStudent = await models.CourseStudent.create(data);
        return newCourseStudent
    }

    async create(data){
        const hash = await bcript.hash(data.Student.email, 10)
        const newData = {
            ...data, 
            Student: {
                ...data.Student,
                email: hash
            }
        }
        const newCourseStudentAll = await models.CourseStudent.create(newData, { 
            include: ['Student']
        });
        return newCourseStudentAll
    }

    async findAll(){
        const courseStudent = await models.CourseStudent.findAll()
        return courseStudent
    }

    async findStudent(id){
        const courseStudent = await models.CourseStudent.findByPk(id)
        return courseStudent
    }
}

module.exports =  CourseStudentService
