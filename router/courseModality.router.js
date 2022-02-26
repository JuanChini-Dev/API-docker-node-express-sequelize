const express = require('express')
const CourseModalityController = require('../controllers/courseModality.controlers')
const router = express.Router()

router.get('/', CourseModalityController.getCourseModality)

router.post('/', CourseModalityController.postCourseModality
)

module.exports = router