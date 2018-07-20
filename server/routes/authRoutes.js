const express = require('express')

const db = require('../db/functions/store')
const token = require('../auth/token')
const hash = require('../auth/hash')

const router = express.Router()

router.post('/register', register, token.issue)

function register (req, res, next) {
  db.storeExists(req.body.email)
    .then(exists => {
      if (exists) {
        return res.status(400).send({message: 'User exists'})
      }
      db.addNewStore(req.body)
        .then(() => next())
    })
    .catch(err => {
      res.status(500).send({message: err.message})
    })
}

router.post('/login', login, token.issue)

function login (req, res, next) {
  db.verifyStoreDetails(req.body.email)
    .then(user => {
      return user || invalidCredentials(res)
    })
    .then(user => {
      return user && hash.verify(user.hash, req.body.password)
    })
    .then(isValid => {
      return isValid ? next() : invalidCredentials(res)
    })
    .catch(() => {
      res.status(400).send({
        errorType: 'DATABASE_ERROR'
      })
    })
}

function invalidCredentials (res) {
  res.status(400).send({
    errorType: 'INVALID_CREDENTIALS'
  })
}

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getStore(id)
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find user')
    })
})

module.exports = router
