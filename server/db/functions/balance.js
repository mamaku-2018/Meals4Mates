var environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const knex = require('knex')(config)

module.exports = {
  getCurrentBalance
}

function getCurrentBalance (id, db = knex) {
  return db('')
}
