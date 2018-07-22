const express = require('express')
const db = require('../db/functions/store')
const router = express.Router()

router.get('/', (req, res) => {
  db.getAllStoreLocations()
    .then((details) => {
      res.json(details)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getStoreDetails(id)
    .then(details => res.json(details))
    .catch(err => {
      // eslint-disable-next-line
      console.log(err)
      res.status(500).send('Unable to find store details')
    })
})

router.put('/:id/edit', (req, res) => {
  const store = {
    id: req.body.id,
    name: req.body.name,
    address: req.body.address,
    phone: req.body.phone,
    owner: req.body.owner,
    email: req.body.email
  }
  db.editStoreDetails(store)
    .then(() => { res.status(200) })
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
