const express = require('express')
const db = require('../db/functions/store')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getStoreDetails(id)
    .then(details => res.json(details[0]))
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find store details')
    })
})

router.put('/:id/edit', (req, res) => {
  const id = req.params.id
  const store = {
    id: id,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    lat: req.body.lat,
    lng: req.body.lng,
    owner: req.body.owner,
    email: req.body.email,
    hash: req.body.hash
  }
  db.editStoreDetails(store)
    .then(() => res.send('information updated'))
    .catch(err => {
    // eslint-disable-next-line
    console.log(err)
      res.status(500).send('Unable to edit store details')
    })
})

router.post('/register', (req, res) => {
  const store = {
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    lat: req.body.lat,
    lng: req.body.lng,
    owner: req.body.owner,
    email: req.body.email,
    hash: req.body.hash
  }
  db.addNewStore(store)
    .then(() => res.send('New Store Added'))
    .catch(err => {
    // eslint-disable-next-line
    console.log(err)
      res.status(500).send('Unable to add new store details')
    })
})

module.exports = router
