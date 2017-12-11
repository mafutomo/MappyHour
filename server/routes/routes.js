const express = require('express')
const router = express.Router()
const knex = require('../../knex');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const cryptic = require('../queries/bcrypt.js')

router.use(express.static('public'))

// router.get('/restaurants/',queries.getRestaurants)
//
// router.get('/restaurants/:name', queries.getRestaurantsName)

router.get('/favorites/', (req,res,sendit)=>{
    res.status(200).send('works')
})

router.get('/favorites/:id', (req,res,sendit)=>{
  res.sendStatus(200)
})
router.get('/restaurants/', (req,res,sendit)=>{
  knex('restaurants').then(data=>{
  res.status(200).send(data)
  })
})
})
router.post('/user/',cryptic.compare)

router.post('/users/',cryptic.store)//no touchy

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
