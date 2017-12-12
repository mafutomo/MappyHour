exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', table => {
    table.increments('id')
    table.integer('rating').defaultsTo(3)
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('id').inTable('users')
    table.integer('restaurant_id').notNullable()
    table.foreign('restaurant_id').references('id').inTable('restaurants')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites')
};
