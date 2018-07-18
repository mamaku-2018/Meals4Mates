var environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  addNewStore,
  getStoreDetails,
  editStoreDetails
}

function getStoreDetails (id, db = knex) {
  return db('stores')
    .where('s')
}

// new store object strcture = {user.name, user.hash, user.email, stores.name, stores.address, stores.phone, stores.lat, stores.lng}
function addNewStore (newStore, db = knex) {
  return db('store as s')
    .join('users as u', 's.id', 'u.store_id')
    .insert({
      's.name': newStore.name,
      's.address': newStore.address,
      'u.name': newStore.owner,
      's.phone': newStore.phone,
      'u.email': newStore.email,
      'u.hash': newStore.hash,
      's.lat': newStore.lat,
      's.lng': newStore.lng
    })
}
