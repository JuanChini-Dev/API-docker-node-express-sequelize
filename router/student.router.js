const express = require('express')
const StudentControler = require('../controllers/student.controlers')
const  ValidatorHandler = require('../middlewares/validatorHandler')
const { getStudentSchema, createStudentSchema }  = require('../schemas/studentSchema')

const router = express.Router()

// const StudentService = require('../services/student.services')
// const service = new StudentService()

router.get('/', StudentControler.getStudent
    )

router.get('/:id', ValidatorHandler(getStudentSchema, 'params'),
    StudentControler.getAllStudent) 
    
    // )
    
router.post('/', ValidatorHandler(createStudentSchema, 'body'), 
    StudentControler.postStudent
    )

module.exports = router