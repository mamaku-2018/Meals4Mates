var environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getTotalDonations
}

function getTotalDonations (id, db = knex) {
  return db('balance')
    .sum('donation')
}
