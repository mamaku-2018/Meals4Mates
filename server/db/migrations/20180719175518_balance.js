exports.up = (knex, Promise) => {
  return knex.schema.createTable('balance', table => {
    table.increments('id').primary()
    table.integer('donation')
    table.integer('redemption')
    table.integer('store_id')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('balance')
}
