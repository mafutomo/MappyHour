
exports.seed = function(knex, Promise) {

      // Inserts seed entries
      return knex('users').insert([
        {id: 1, firstName:'Joseph' , lastName:'Grounds' , email:'joe@gmail.com' , password: '$2b$10$LlkHUztKebk4IH4Y2QgHfuhqWbMoBTdcqhrqAFsa4aK7l8P/J7Asq'},
        {id: 2, firstName:'Brent' , lastName:'Schroder' , email:'schroder.brent@gmail.com' , password: '$2b$10$plC8wIoSWwsPbH3LmHxU2uloke.Bnkhyl1JPQfuikfJ8UwhihJ36q'},
        {id: 3, firstName:'Rob' , lastName:'Quan' , email:'rob@gmail.com' , password: '$2b$10$BodN/AWxclcwIV78cf.ARe0woD4FwAigrND8l1pxtkMSgeQvojWrq'},
        {id:4, firstName:'Melissa' , lastName:'Utomo' , email:'melissa@gmail.com' , password: '$2b$10$j5/cWY/DCVjeP.H/r63pROW1s/ajHNmwO/jg5RMA3KnX0XzJcqtaW'}
      ])


      .then(function(){
        return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))")
      })
};
