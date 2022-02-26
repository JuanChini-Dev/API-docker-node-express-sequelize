// const express = require('express')
const CourseModalityServices = require('../services/courseModality.services')
const service = new CourseModalityServices()

class CourseModalityController {

    static async getCourseModality(req, res, next){
        try {
            const courseModality = await service.findAll()
            res.json(courseModality)
        } catch (error) {
            next(error)
        }
    }

    static async postCourseModality(req, res, next) {
        try {
            const body = req.body;
            const newCourseModality = await service.create(body);
            res.status(201).json(newCourseModality);
    
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CourseModalityController 