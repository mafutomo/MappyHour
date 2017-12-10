const express = require('express')
const router = express.Router()
const knex = require('../../knex.js')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const queries = require('../queries/queries')

router.use(express.static('public'))

router.post('/user/',(req,res,sendit)=>{
  console.log(req.body.email);
  console.log(req.body.password);
  knex('users').where({
    email: req.body.email
    }).first()
    .then(user=>{
      bcrypt.compare(req.body.password, user.password, function(err, ver) {
          ver ? res.status(200).send({id:user.id}) : res.sendStatus(401)
      })
    })
}

// router.post('/user/',(req,res,sendit)=>{
//   knex('users').where({
//   email: req.body.email
//   }).first()
//   .then(user=>{
//       res.status(201).send({name: user.firstName})
//   })
// })

router.get('/restaurants/',queries.getRestaurants)

router.get('/restaurants/:name', queries.getRestaurantsName)

router.get('/favorites/:id', (req,res,sendit)=>{
  res.sendStatus(200)
})

router.post('/users/',(req,res,sendit)=>{
  res.sendStatus(201)
})//no touchy

router.post('/favorites/', (req,res,sendit)=>{
  res.sendStatus(201)
})

router.delete('/favorites/:id', (req,res,sendit)=>{
  if (!req.params.id) res.sendStatus(404)
  knex('favorites').where({id: req.params.id}).del().then(
    res.sendStatus(200)
  )
})

router.put('/favorites/', (req,res,sendit)=>{
  res.sendStatus(200)
})

module.exports = router
