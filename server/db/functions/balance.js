var environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getCurrentBalance
}

function getCurrentBalance (id, db = knex) {
  return db('balance')
    .where('store_id', id)
    .sum('donation as donation')
    .sum('redemption as redemption')
    .then(figures => figures[0].donation - figures[0].redemption)
}
