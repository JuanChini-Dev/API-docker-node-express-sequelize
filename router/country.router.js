const express = require('express')
const CountryServices = require('../services/course.services')
const router = express.Router()

const service = new CountryServices()

router.get('/', async (req, res) => {
    try {
        const countries = await service.findAll()
        res.json(countries)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const newCountry = await service.create(body);
        res.status(201).json(newCountry);

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: error.data

        })
    }
})



module.exports = router