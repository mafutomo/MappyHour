const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

router.get('/restaurants/',(req,res,sendit)=>{
    knex('restaurants').then(data=>{
    res.status(200).send(data)
  })
})
router.get('/user/',(req,res,sendit)=>{
  console.log(req.body)
  knex('users').where({
  email: req.body
  }).first()
  .then(user=>{
    bcrypt.compare(req.body.password, user.password).then(function(ver) {
      ver ? res.status(200).Status({name: user.firstName}) : res.sendStatus(403)
    })
  })
})
// router.get('/restaurants/:name', (req,res,sendit)=>{
//
// })
// router.post('/users/',(req,res,sendit)=>{
//
// })
// router.get('/')

module.exports = router
