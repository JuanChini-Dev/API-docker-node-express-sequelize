const passport = require('passport')

const { LocalStrategy } = require('./auth/strategies/localStrategies')

passport.use(LocalStrategy)
