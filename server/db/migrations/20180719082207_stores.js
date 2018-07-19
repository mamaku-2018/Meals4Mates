exports.up = (knex, Promise) => {
  return knex.schema.createTable('stores', table => {
    table.increments('id').primary()
    table.string('name')
    table.boolean('admin')
    table.string('address')
    table.string('email')
    table.string('hash')
    table.string('owner')
    table.integer('phone')
    table.integer('lat')
    table.integer('lng')
    table.string('image_url')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('stores')
}
