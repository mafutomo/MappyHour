const express = require('express')
const router = express.Router()
const knex = require('../knex')

router.get('/restaurants/',(req,res,sendit)=>{
    knex('restaurants').then(data=>{
    console.log(data)
    res.status(200).send(data)
  })
})
router.get('/users/',(req,res,sendit)=>{
  knex('users')
  res.status(200).send({sad: 'sad'})
})

module.exports= router
