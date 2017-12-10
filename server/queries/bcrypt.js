const knex = require('../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

const store = (req,res,sendit)=>{
  var salt = bcrypt.genSaltSync(4)
  var hash = bcrypt.hashSync(req.body.password, salt);
  knex('users').insert({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    email:req.body.email,
    password:hash,
    salt:salt
  }).then(user=>{
      res.status(201).send({name: user.firstName})
  })
}
const compare = (req,res,sendit)=>{
  knex('users').where({
  email: req.body.email
  }).first()
  .then(user=>{
    var hash = bcrypt.hashSync(req.body.password, salt)
    (hash == user.password) ? res.sendStatus(200) : res.sendStatus(401)
  })
}
module.exports = {
  store,
  compare
}
