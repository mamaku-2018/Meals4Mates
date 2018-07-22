var environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

const hash = require('../../auth/hash')

module.exports = {
  addNewStore,
  storeExists,
  getStore,
  getStoreByEmail,
  getStoreDetails,
  editStoreDetails
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
      phone: newStore.phone,
      hash: passwordHash
    })
}

function storeExists (email, db = knex) {
  return db('stores')
    .count('id as n')
    .where('email', email)
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

function editStoreDetails (store, db = knex) {
  return db('stores')
    .where('id', store.id)
    .update({
      name: store.name,
      address: store.address,
      phone: store.phone,
      owner: store.owner,
      email: store.email
    })
}
