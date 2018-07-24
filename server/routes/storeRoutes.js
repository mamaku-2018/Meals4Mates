const express = require('express')
const db = require('../db/functions/store')
const router = express.Router()

router.get('/:id/donationRedemption', (req, res) => {
  const id = Number(req.params.id)
  db.getDonationsRedemptions(id)
    .then((money) => {
      res.json(money)
    })
})

router.get('/', (req, res) => {
  db.getAllStoreLocations()
    .then((details) => {
      res.json(details)
    })
})

router.get('/donationRedemption', (req, res) => {
  db.getAllDonationsRedemptions()
    .then((money) => {
      res.json(money)
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
    id: req.params.id,
    name: req.body.name,
    address: req.body.address,
    suburb: req.body.suburb,
    city: req.body.city,
    phone: req.body.phone,
    owner: req.body.owner,
    email: req.body.email,
    lat: req.body.lat,
    lng: req.body.lng
  }
  db.emailInUse(store)
    .then(exists => {
      if (exists) {
        return res.status(200).send({message: 'Email already in use'})
      } else {
        db.editStoreDetails(store)
          .then(() => { res.status(200).send({message: 'Your details have been successfully updated'}) })
          .catch(err => {
          // eslint-disable-next-line
          console.log(err)
            res.status(500).send('Unable to edit store details')
          })
      }
    })
})

router.post('/register', (req, res) => {
  const store = {
    name: req.body.name,
    suburb: req.body.suburb,
    city: req.body.city,
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
