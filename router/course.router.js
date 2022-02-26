const express = require('express')
const CourseController = require('../controllers/course.controlers')
const router = express.Router()

router.get('/', CourseController.getCourses)

router.post('/', CourseController.postCourses
)

module.exports = router