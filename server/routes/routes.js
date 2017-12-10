const express = require('express')
const router = express.Router()
const knex = require('../../knex.js')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

router.use(express.static('public'))

router.post('/user/',(req,res,sendit)=>{
  console.log(req.body.email);
  console.log(req.body.password);
  let email = req.body.email;
  let pass = req.body.password;
  return knex('users').where({email: email}).first()
  .then(
      res.status(200).send()
  )}
}

// router.post('/user/',(req,res,sendit)=>{
//   knex('users').where({
//   email: req.body.email
//   }).first()
//   .then(user=>{
//       res.status(201).send({name: user.firstName})
//   })
// })

router.get('/restaurants/',(req,res,sendit)=>{
    knex('restaurants').then(data=>{
    res.status(200).send(data)
  })
})

router.get('/restaurants/:name', (req,res,sendit)=>{
  knex('restaurants').where({
    name: req.params.name
  }).first()
  .then(restraunt=>{
    res.status(200).send(restraunt)
  })
})

router.get('/favorites/:id', (req,res,sendit)=>{
  res.sendStatus(200)
})

router.post('/users/',(req,res,sendit)=>{
  res.sendStatus(201)
})

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
