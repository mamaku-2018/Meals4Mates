exports.up = (knex, Promise) => {
  return knex.schema.createTable('stores', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('suburb')
    table.string('city')
    table.boolean('admin')
    table.string('address')
    table.string('email')
    table.binary('hash')
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
