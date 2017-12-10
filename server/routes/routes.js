const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

router.get('/restaurants/',(req,res,sendit)=>{
  console.log('not name');
    knex('restaurants').then(data=>{
    res.status(200).send(data)
  })
})
router.get('/restaurants/:name', (req,res,sendit)=>{
  console.log('name');
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
router.post('/user/',(req,res,sendit)=>{
  console.log(req.body)
  knex('users').where({
  email: req.body.email
  }).first()
  .then(user=>{
      res.status(201).send({name: user.firstName})
  })
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
