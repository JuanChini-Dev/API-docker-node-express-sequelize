const express = require('express')
const app = express()
const port = 3002
const routerApi = require('./router')
const sequelize = require('./libs/sequelize')

const {
  logErrors,
  ormErrorHandler,
  boomErrorHandler,
  errorHandler,
} = require('./middlewares/errorHandler')
const { checkApiKey } = require('./middlewares/authHandler')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/nueva-ruta', checkApiKey, (req, res) => {
  res.send('Hello world 2')
})

routerApi(app)
app.use(logErrors)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Mi servidor corre en el puerto ' + port)
  console.log(sequelize.models)
})
