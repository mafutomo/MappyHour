exports.seed = function(knex, Promise) {

  return knex('favorites').del()
    .then(() => knex('restaurants').del())
    .then(() => knex('users').del())
}
