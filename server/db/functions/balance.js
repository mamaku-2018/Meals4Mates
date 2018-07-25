var environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getStoreTotalDonation,
  getStoreTotalRedemption,
  addDonation,
  makeRedemption,
  getTotalDonations,
  getTotalRedemptions,
  getStoreStats
}

function getStoreTotalRedemption (id, db = knex) {
  return db('balance')
    .where('store_id', id)
    .sum('redemption as redemption')
    .then(redemption => redemption[0])
}

function getStoreTotalDonation (id, db = knex) {
  return db('balance')
    .where('store_id', id)
    .sum('donation as donation')
    .then(donation => donation[0])
}

function getStoreStats (db = knex) {
  return db('stores')
    .join('balance', 'stores.id', 'balance.store_id')
    .groupBy('stores.id')
    .sum('balance.redemption as redemption')
    .sum('balance.donation as donation')
    .select('stores.name', 'stores.id', 'stores.suburb')
}

function addDonation (donation, db = knex) {
  return db('balance')
    .insert(donation)
}

function makeRedemption (redemption, db = knex) {
  return db('balance')
    .insert(redemption)
}

function getTotalDonations (db = knex) {
  return db('balance')
    .sum('donation as donation')
}

function getTotalRedemptions (db = knex) {
  return db('balance')
    .sum('redemption as redemption')
}
