exports.up = (knex, Promise) => {
  return knex.schema.createTable('balance', table => {
    table.increments('id').primary()
    table.integer('donation')
    table.integer('redemption')
    table.integer('store_id')
    table.string('timestamp')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('balance')
}
