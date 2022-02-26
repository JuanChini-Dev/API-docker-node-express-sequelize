const { Country, country_schema } = require('./country.model')
const { Province, province_schema } = require('./provinces.model')
const { Locality, locality_schema } = require('./locality.model')
const { Document_Type, document_type_schema } = require('./documentType.model')
const { Student, student_schema } = require('./student.model')
const { Course, course_schema } = require('./course.model')
const { Modality, modality_schema } = require('./modality.model')
const { CourseModality, course_modality_schema } = require('./courseModality.model')
const { CourseStudent, course_student_schema } = require('./courseStudent.model')

function setupModels(sequelize){
  Country.init(country_schema, Country.config(sequelize)) 
  Province.init(province_schema, Province.config(sequelize))
  Locality.init(locality_schema, Locality.config(sequelize))
  Document_Type.init(document_type_schema, Document_Type.config(sequelize))
  Student.init(student_schema, Student.config(sequelize))
  Course.init(course_schema, Course.config(sequelize))
  Modality.init(modality_schema, Modality.config(sequelize))
  CourseModality.init(course_modality_schema, CourseModality.config(sequelize))
  CourseStudent.init(course_student_schema, CourseStudent.config(sequelize))


  Country.assocciate(sequelize.models)
  Province.assocciate(sequelize.models)
  Locality.assocciate(sequelize.models)
  Document_Type.assocciate(sequelize.models)
  Student.assocciate(sequelize.models)
  Course.assocciate(sequelize.models)
  Modality.assocciate(sequelize.models)
  CourseModality.assocciate(sequelize.models)
  CourseStudent.assocciate(sequelize.models)

}
module.exports = setupModels;