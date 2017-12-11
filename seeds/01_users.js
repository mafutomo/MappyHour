exports.seed = function(knex, Promise) {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName:'Joseph' , lastName:'Grounds' , email:'joe@gmail.com' , password: '$2a$04$viNV9cjyWyAyVmWIQiLmDOxX.SPxBHfpvnqt316p0gWi5f06C6Fte' , salt: '$2a$04$viNV9cjyWyAyVmWIQiLmDO'},
       {id: 2, firstName:'Brent' , lastName:'Schroder' , email:'schroder.brent@gmail.com' , password: '$2a$04$Tym642cT5ztu4/YKAEpPv.VtorDbsuohBI6D.F3DeVq6lH3aR3/.e', salt: '$2a$04$Tym642cT5ztu4/YKAEpPv.'},
       {id: 3, firstName:'Rob' , lastName:'Quan' , email:'rob@gmail.com' , password: '$2a$04$TW0dZf8ulcaQsatUvoUU2eams6zovPWFr3dg2.ev5J7bKSeLLxewa', salt: '$2a$04$TW0dZf8ulcaQsatUvoUU2e'},
       {id:4, firstName:'Melissa' , lastName:'Utomo' , email:'melissa@gmail.com' , password: '$2a$04$hjtdWxemlLzWiTlcoiKJQ.kw4b3x/3cWCXVWclmT9ARqnVBOKoTtC', salt: '$2a$04$hjtdWxemlLzWiTlcoiKJQ.'}
      ])
      .then(function(){
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
};
