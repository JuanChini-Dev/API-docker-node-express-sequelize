const { models } = require('../libs/sequelize')
class CourseServices {

    async create(data){
        const newCourse = await models.Course.create(data);
        return newCourse
    }

    async findAll(){
        const courses = await models.Course.findAll({
            include: models.CourseModality,
                attributes: [activeCourse == true]
        })
        return courses
    } 
}

module.exports =  CourseServices
