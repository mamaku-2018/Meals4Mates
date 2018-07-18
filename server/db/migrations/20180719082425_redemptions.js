exports.up = (knex, Promise) => {
  return knex.schema.createTable('redemptions', table => {
    table.increments('id').primary()
    table.integer('amount')
    table.integer('store_id')
    table.integer('timestamp')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('redemptions')
}
