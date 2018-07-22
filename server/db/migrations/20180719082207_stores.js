exports.up = (knex, Promise) => {
  return knex.schema.createTable('stores', table => {
    table.increments('id').primary()
    table.string('name')
    table.boolean('admin')
    table.string('address')
    table.string('email')
    table.string('hash')
    table.string('owner')
    table.decimal('lat')
    table.decimal('lng')
    table.string('phone')
    table.string('image_url')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('stores')
}
