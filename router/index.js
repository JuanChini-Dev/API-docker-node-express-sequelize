const express = require('express');
const countryRouter = require('./country.router')
const provinceRouter = require('./provinces.router')
const localityRouter = require('./locality.router')
const studentRouter = require('./student.router')
const courseRouter = require('./course.router')
const modalityRouter = require('./modality.router')
const courseModalityRouter = require('./courseModality.router')
const courseStudentRouter = require('./courseStudent.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/country', countryRouter);
  router.use('/province', provinceRouter);
  router.use('/locality', localityRouter);
  router.use('/student', studentRouter)
  router.use('/course', courseRouter)
  router.use('/modality', modalityRouter)
  router.use('/courseModality', courseModalityRouter)
  router.use('/courseStudent', courseStudentRouter)
}

module.exports = routerApi