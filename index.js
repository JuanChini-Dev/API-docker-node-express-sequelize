const express = require('express');
const app = express();
const port = 3002;
const routerApi = require('./router');
const sequelize = require('./libs/sequelize');

const { logErrors, ormErrorHandler, boomErrorHandler, errorHandler } = require('./middlewares/errorHandler')

app.use(express.json())


routerApi(app);
app.use(logErrors);
app.use(ormErrorHandler)
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
    console.log('Mi servidor corre en el puerto ' + port)
    console.log(sequelize.models)
})