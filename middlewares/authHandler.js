const boom = require('@hapi/boom');
const { config } = require('./../config/config');


function checkApiKey(req, res, next){
    const apiKey = req.headers['api'];
    
    if (apiKey === config.API_KEY ){
        next();
    } else {
        next(boom.unauthorized('Invalid API key'));
    }

}

module.exports = { checkApiKey };