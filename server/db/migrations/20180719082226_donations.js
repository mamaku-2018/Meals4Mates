exports.up = (knex, Promise) => {
  return knex.schema.createTable('donations', table => {
    table.increments('id').primary()
    table.integer('amount')
    table.integer('store_id')
    table.string('timestamp')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('donations')
}
