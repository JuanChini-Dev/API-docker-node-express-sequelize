// const express = require('express')
const StudentService = require('../services/student.services')
const service = new StudentService()

class StudentControler {
    static async getAllStudent(req, res, next){
        try {
            const { id } = req.params;
            const student = await service.findStudent(id)
            res.json(student)
        } catch(error){
            next(error)
        }
    }

    static async getStudent(req, res, next){
        try {
            const students = await service.findAll()
            res.json(students)
        } catch (error) {
            next(error)
        }
    }

    static async postStudent(req, res, next) {
        try {
            const body = req.body;
            const newStudent = await service.create(body);
            res.status(201).json(newStudent);
    
        } catch (error) {
            next(error)
        }
    }
}

module.exports = StudentControler 