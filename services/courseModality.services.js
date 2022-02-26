const { models } = require('../libs/sequelize')
class CourseModalityServices {

    async create(data){
        const newCourseModality = await models.CourseModality.create(data);
        return newCourseModality
    }

    async findAll(){
        const courseModality = await models.CourseModality.findAll({
            include: [models.Course, models.Modality]
        })
        return courseModality
    } 
}

module.exports =  CourseModalityServices
