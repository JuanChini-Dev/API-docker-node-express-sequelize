const { models } = require('../libs/sequelize')

class CourseStudentService {

    async create(data){
        const newCourseStudent = await models.CourseStudent.create(data);
        return newCourseStudent
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
