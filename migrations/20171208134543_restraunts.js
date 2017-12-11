
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', table => {
    table.increments()
    table.string('name').notNullable()
    table.string('address').notNullable()
    table.string('phonenumber').notNullable()
    table.string('lat').notNullable()
    table.string('lng').notNullable()
    table.text('description').notNullable().defaultsTo('description unavialable')
    table.text('url')
    table.text('picture').notNullable().defaultsTo('http://www.broadviewent.com/data/uploads/image-unavailable-icon.png')
    table.text('happyHourMenu').notNullable().defaultsTo('menu info unavialble')
    table.decimal('averageRating').defaultsTo(3).notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants')
};
