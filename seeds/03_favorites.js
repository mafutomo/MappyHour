exports.seed = function(knex, Promise) {
  return knex('favorites').insert([{
      id: 1,
      user_id: 1,
      restaurant_id: 2
    },
    {
      id: 2,
      user_id: 2,
      restaurant_id: 1
    },
    {
      id: 3,
      user_id: 2,
      restaurant_id: 3
    },
    {
      id: 4,
      user_id: 3,
      restaurant_id: 1
    },
    {
      id: 5,
      user_id: 3,
      restaurant_id: 2
    },
    {
      id: 6,
      user_id: 2,
      restaurant_id: 4
    },
    {
      id: 7,
      user_id: 4,
      restaurant_id: 1
    },
    {
      id: 8,
      user_id: 4,
      restaurant_id: 2
    },
    {
      id: 9,
      user_id: 4,
      restaurant_id: 4
    },
    {
      id: 10,
      user_id: 4,
      restaurant_id: 3
    },
    {
      id: 11,
      user_id: 3,
      restaurant_id: 3
    },
    {
      id: 12,
      user_id: 3,
      restaurant_id: 4
    }
  ]).then(function() {
    return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites))");
  });
};
