exports.seed = function(knex, Promise) {
      return knex('favorites').insert([
        {favorites_id: 1, user_id: 1, restaurant_id: 2},
        {favorites_id: 2,user_id: 2, restaurant_id: 1},
        {favorites_id: 3,user_id: 2, restaurant_id: 3},
        {favorites_id: 4,user_id: 3, restaurant_id: 1},
        {favorites_id: 5,user_id: 3, restaurant_id: 2},
        {favorites_id: 6,user_id: 2, restaurant_id: 4},
        {favorites_id: 7,user_id: 4, restaurant_id: 1},
        {favorites_id: 8,user_id: 4, restaurant_id: 2},
        {favorites_id: 9,user_id: 4, restaurant_id: 4},
        {favorites_id: 10,user_id: 4, restaurant_id: 3}
      ]).then(function(){
        return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites))");
    });
};
