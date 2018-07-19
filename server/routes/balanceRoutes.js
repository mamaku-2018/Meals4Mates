const express = require('express')
const db = require('../db/functions/balance')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getStoreTotalDonation(id)
    .then(donations => {
      db.getStoreTotalRedemption(id)
        .then(redemptions => {
          const balance = {
            donations: donations.donation,
            redemptions: redemptions.redemption
          }
          res.json([balance])
        })
    })
})

router.post('/:id/donate', (req, res) => {
  const storeId = req.params.id
  const donation = {
    store_id: storeId,
    donation: req.body.donation
    // will add time property as well following timestamp strucutre
  }
  db.addDonation(donation)
    .then(() => res.send('Thank you for Helping out!'))
    .catch(err => {
    // eslint-disable-next-line
console.log(err)
      res.status(500).send('Unable to make redemption')
    })
})

router.post('/:id/redeem', (req, res) => {
  const storeId = req.params.id
  const redemption = {
    store_id: storeId,
    redemption: req.body.redemption
    // will add time property as well following timestamp strucutre
  }
  db.makeRedemption(redemption)
    .then(() => res.send('Enjoy Your Meal!'))
    .catch(err => {
    // eslint-disable-next-line
console.log(err)
      res.status(500).send('Unable to make redemption')
    })
})

router.get('/admiin', (req, res) => {
  const id = req.params.id
  db.getStoreTotalDonation(id)
    .then(donations => {
      db.getStoreTotalRedemption(id)
        .then(redemptions => {
          const balance = {
            donations: donations.donation,
            redemptions: redemptions.redemption
          }
          res.json([balance])
        })
    })
})

module.exports = router
