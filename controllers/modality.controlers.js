// const express = require('express')
const ModalityServices = require('../services/modality.services')
const service = new ModalityServices()

class ModalityController {

    static async getModality(req, res, next){
        try {
            const modality = await service.findAll()
            res.json(modality)
        } catch (error) {
            next(error)
        }
    }

    static async postModality(req, res, next) {
        try {
            const body = req.body;
            const newModality = await service.create(body);
            res.status(201).json(newModality);
    
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ModalityController 