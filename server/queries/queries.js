const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')


const getRestaurants = (req,res,sendit)=>{
  knex('restaurants').then(data=>{
  res.status(200).send(data)
})
  }
}
const getRestaurantsId = (req,res,sendit)=>{
  knex('restaurants').where({
    name: req.params.name
  }).first()
  .then(restraunt=>{
    res.status(200).send(restraunt)
  })
}
const postUser = (req,res,sendit)=>{
  knex('users').where({
  email: req.body.email
  }).first()
  .then(user=>{
      res.status(201).send({name: user.firstName, id: user.id})
  })
}
const deleteFavorite = (req,res,sendit)=>{
  if (!req.params.id) res.sendStatus(404)
  knex('favorites').where({id: req.params.id}).del()
  .then(fav=>res.sendStatus(200))
}
const getFavorites = (req,res,sendit)=>{
  if (!req.params.id) res.sendStatus(404)
  knex('')
}

module.exports={
getRestaurants,
getRestaurantsId,
postUser,
deleteFavorite
}
