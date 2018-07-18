exports.up = (knex, Promise) => {
  return knex.schema.createTable('stores', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('address')
    table.integer('phone')
    table.integer('lat')
    table.integer('lng')
    table.string('image_url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('stores')
}
