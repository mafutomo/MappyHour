const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const favorite = require('./favorites.js')

const getRestaurants = (req,res,sendit)=>{
  knex('restaurants').then(data=>{
  res.status(200).send(data)

    })
  }

const getRestaurantsName = (req,res,sendit)=>{
  knex('restaurants').where({
    name: req.params.name
  }).first()
  .then(restraunt=>{
    res.status(200).send(restraunt)

  })
}

const deleteFavorite = (req,res,sendit)=>{
  if (!req.params.id) res.sendStatus(404)
  knex('favorites').where({id: req.params.id}).del()
  .then(fav=>res.sendStatus(200))
}
const getFavorites = (req,res,sendit) =>{
  if (!req.params.id) res.sendStatus(404)
  knex('')
}

const myFavePage = (req,res,sendit) => {
    let user = req.params.id;
    return knex('favorites').where('user_id', user).join('restaurants', 'restaurants.id', '=', 'favorites.restaurant_id').select('*').then( (response) => {
      res.status(200).send(response)
    })
  }

const putFavorites = (req,res,sendit) =>{
  knex('favorites').where({restaurant_id: req.body.restId, user_id: req.body.userId}).update({rating: req.body.rating})
  .then(count =>{
    favorite(req.body.restId,req.body.userId)
    res.status(200).send({hello:'world'})
  })
}
module.exports={
getRestaurants,
getRestaurantsName,
putFavorites,
deleteFavorite,
myFavePage
}
