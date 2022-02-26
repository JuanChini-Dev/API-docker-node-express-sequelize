const express = require('express')
const ModalityController = require('../controllers/modality.controlers')
const router = express.Router()

router.get('/', ModalityController.getModality)

router.post('/', ModalityController.postModality)

module.exports = router