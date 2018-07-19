const express = require('express')
const db = require('../db/functions/balance')
const router = express.Router()

router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getCurrentBalance(id)
    .then(balance => res.json(balance))
})

module.exports = router
