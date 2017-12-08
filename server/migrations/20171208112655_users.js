
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').notNullable().unique()
    table.binary('password',60).notNullable().unique()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
