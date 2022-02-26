const express = require('express')
const { Locality } = require('../db/models/locality.model')


const router = express.Router()

const LocalityService = require('../services/locality.services')
const service = new LocalityService()

router.get('/', async(req, res) => {
    try {
        const localities = await service.findAll()
        res.json(localities)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const locality = await service.findLocality(id)
        res.json(locality)
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const newLocality = await service.create(body);
        res.status(201).json(newLocality);

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: error.data

        })
    }
})



module.exports = router