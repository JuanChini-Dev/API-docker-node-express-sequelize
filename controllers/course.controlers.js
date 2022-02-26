// const express = require('express')
const CourseServices = require('../services/course.services')
const service = new CourseServices()

class CourseController {

    static async getCourses(req, res, next){
        try {
            const courses = await service.findAll()
            res.json(courses)
        } catch (error) {
            next(error)
        }
    }

    static async postCourses(req, res, next) {
        try {
            const body = req.body;
            const newCourse = await service.create(body);
            res.status(201).json(newCourse);
    
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CourseController 