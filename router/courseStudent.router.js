const express = require('express')
const CourseStudentController = require('../controllers/courseStudent.controlers')
const router = express.Router()

router.get('/', CourseStudentController.getCourseStudent)

router.post('/', CourseStudentController.postCourseStudent)

router.post('/all', CourseStudentController.postCourseStudentAll)

module.exports = router