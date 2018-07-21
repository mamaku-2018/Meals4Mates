const jwt = require('jsonwebtoken')
const verifyJwt = require('express-jwt')

const db = require('../db/functions/store')

module.exports = {
  issue,
  decode
}

function issue (req, res) {
  db.getStoreByEmail(req.body.email)
    .then(store => {
      const token = createToken(store, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
}

function createToken (store, secret) {
  return jwt.sign({
    id: store.id
  }, secret, {
    expiresIn: '1d'
  })
}

function decode (req, res, next) {
  verifyJwt({
    secret: getSecret
  })(req, res, next)
}

function getSecret (req, payload, done) {
  done(null, process.env.JWT_SECRET)
}
