exports.seed = function(knex, Promise) {

return knex('restaurants').del()
  .then(() => knex('users').del())

}
