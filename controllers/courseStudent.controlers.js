// const express = require('express')
const CourseStudentServices = require('../services/courseStudent.services')
const service = new CourseStudentServices()

class CourseStudentController {

    static async getCourseStudent(req, res, next){
        try {
            const courseStudent = await service.findAll()
            res.json(courseStudent)
        } catch (error) {
            next(error)
        }
    }

    static async postCourseStudent(req, res, next) {
        try {
            const body = req.body;
            const newCourseStudent = await service.create(body);
            res.status(201).json(newCourseStudent);
    
        } catch (error) {
            next(error)
        }
    }

    static async postCourseStudentAll(req, res, next) {
        try {
            const body = req.body;
            const newCourseStudentAll = await service.create(body);
            res.status(201).json(newCourseStudentAll);          
        } catch( error){
            next(error)
        }
    }
}

module.exports = CourseStudentController 