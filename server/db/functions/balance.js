var environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getCurrentBalance,
  getStoreTotalDonation,
  getStoreTotalRedemption
}

//function returns a array of an object contatining total donation and redemption of the store. these two figures can be used to generate datta for store balance circle as well as bar graph
function getCurrentBalance (id, db = knex) {
  return db('balance')
    .where('store_id', id)
    .sum('donation as donation')
    .sum('redemption as redemption')
}

function getStoreTotalDonation (id, db = knex) {
  return db('balance')
    .where('store_id', id)
    .sum('donation as donation')
    .then(donation => donation[0])
}

function getStoreTotalRedemption (id, db = knex) {
  return db('balance')
    .where('store_id', id)
    .sum('redemption as redemption')
    .then(redemption => redemption[0])
}

