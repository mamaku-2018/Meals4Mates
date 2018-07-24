var environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

const hash = require('../../auth/hash')

module.exports = {
  addNewStore,
  storeExists,
  emailInUse,
  getStore,
  getStoreByEmail,
  getStoreDetails,
  editStoreDetails,
  getAllStoreLocations,
  getDonationsRedemptions,
  getAllDonationsRedemptions
}

function addNewStore (newStore, db = knex) {
  const passwordHash = hash.generate(newStore.password)
  return db('stores')
    .insert({
      name: newStore.name,
      admin: 0,
      owner: newStore.owner,
      email: newStore.email,
      address: newStore.address,
      suburb: newStore.suburb,
      city: newStore.city,
      phone: newStore.phone,
      hash: passwordHash,
      lat: newStore.lat,
      lng: newStore.lng
    })
}

function getDonationsRedemptions (id, db = knex) {
  return db('balance')
    .where('balance.store_id', id)
    .select('created_at as date', 'donation', 'redemption')
}

function getAllDonationsRedemptions (db = knex) {
  return db('balance')
    .select('created_at as date', 'donation', 'redemption')
}

function storeExists (email, db = knex) {
  return db('stores')
    .count('id as n')
    .where('email', email)
    .then(count => {
      return count[0].n > 0
    })
}

function emailInUse (store, db = knex) {
  return db('stores')
    .whereNot('id', store.id)
    .where('email', store.email)
    .count('id as n')
    .then(count => {
      return count[0].n > 0
    })
}

function getStoreByEmail (email, db = knex) {
  return db('stores')
    .select()
    .where('email', email)
    .first()
}

function getStoreDetails (id, db = knex) {
  return db('stores')
    .select()
    .where('id', id)
    .first()
}

function getStore (id, db = knex) {
  return db('stores')
    .select()
    .where('id', id)
}

function getAllStoreLocations (db = knex) {
  return db('stores')
    .select()
}

function editStoreDetails (store, db = knex) {
  return db('stores')
    .where('id', store.id)
    .update({
      name: store.name,
      address: store.address,
      suburb: store.suburb,
      city: store.city,
      phone: store.phone,
      owner: store.owner,
      email: store.email,
      lat: store.lat,
      lng: store.lng
    })
}
