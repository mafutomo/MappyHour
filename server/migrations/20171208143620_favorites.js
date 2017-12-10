
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', table => {
    table.increments()
    table.integer('raiting').notNullable()
    table.foreign('user_id').references('id').inTable('users')
    table.foreign('restaurant_id').references('id').inTable('restaurants')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favorites')
};
