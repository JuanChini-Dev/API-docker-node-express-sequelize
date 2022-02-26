const express = require('express')
const { Province } = require('../db/models/provinces.model')
// const { ProvinceController } = require('../controllers/province.controllers')


const router = express.Router()

const ProvinceService = require('./../services/province.services')
const service = new ProvinceService()

router.get('/', async(req, res) => {
    try {
        const provinces = await service.findAll()
        res.json(provinces)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try{
        const { id } = req.params
        const province = await service.findProvince(id)
        res.json(province)
    } catch(error){
        res.status(500).json({ message: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const body = req.body;
        const newProvince = await service.create(body);
        res.status(201).json(newProvince);

    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: error.data

        })
    }
})



module.exports = router