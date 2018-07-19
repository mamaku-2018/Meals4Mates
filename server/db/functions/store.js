var environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  addNewStore,
  getStoreDetails,
  editStoreDetails
}

function getStoreDetails (id, db = knex) {
  return db('stores as s')
    .join('users as u', 's.id', 'u.store_id')
    .where('s.id', id)
    .select('u.email as email', 'u.hash as hash', 'u.name as owner',
      's.name as name', 's.address as address', 's.phone as phone')
}

// new store object strcture = {user.name, user.hash, user.email, stores.name, stores.address, stores.phone, stores.lat, stores.lng}
function addNewStore (newStore, db = knex) {
  return db('stores as s')
    .join('users as u', 's.id', 'u.store_id')
    .insert({
      name: newStore.name,
      address: newStore.address,
      phone: newStore.phone,
      lat: newStore.lat,
      lng: newStore.lng
    }).into('stores')
    .insert({
      name: newStore.owner,
      email: newStore.email,
      hash: newStore.hash
    }).into('users')
}

function editStoreDetails (store, db = knex) {
  return db('stores as s')
    .join('users as u', 's.id', 'u.store_id')
    .where('s.id', store.id)
    .select('u.email as email', 'u.hash as hash', 'u.name as owner',
      's.name as name', 's.address as address', 's.phone as phone',
      's.lat as lat', 's.lng as lng')
    .update(
      'name', store.name,
      'address', store.address,
      'phone', store.phone,
      'lat', store.lat,
      'lng', store.lng,
      'owner', store.owner,
      'email', store.email,
      'hash', store.hash
    )
}
