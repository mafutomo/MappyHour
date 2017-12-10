const express = require('express')
const router = express.Router()
const knex = require('../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')


const getRestaurants = (req,res,sendit)=>{
  return knex('restaurants').then(data=>{
    return data
  }
}
const getRestaurantsId = (req,res,sendit)=>{
  return knex('restaurants').where({
    name: req.params.name
  }).first()
  .then(restraunt=>{
    return restraunt
  })
}
const postUser = (req,res,sendit)=>{
  return knex('users').where({
  email: req.body.email
  }).first()
  .then(user=>{
      return user.firstName
  })
}
const deleteFavorite = (req,res,sendit)=>{
  if (!req.params.id) return err
  return knex('favorites').where({id: req.params.id}).del()
  .then(fav=>fav)
}


module.exports={
getRestaurants,
getRestaurantsId,
postUser,
deleteFavorite
}
