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
    .where('s.id', id)
    .select()
}

function addNewStore (newStore, db = knex) {
  return db('stores as s')
    .insert(newStore)
}

function editStoreDetails (store, db = knex) {
  return db('stores as s')
    .where('s.id', store.id)
    .update({
      name: store.name,
      address: store.address,
      phone: store.phone,
      owner: store.owner,
      email: store.email
    })
}
