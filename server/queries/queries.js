const express = require('express')
const router = express.Router()
const knex = require('../../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const favorite = require('./favorites.js')

const getRestaurants = (req, res, sendit) => {
  knex('restaurants').then(data => {
    res.status(200).send(data)
  })
}

const getRestaurantsDay = (req, res, sendit) => {
  knex('restaurants').where({
      name: req.params.day
    })
    .then(restraunts => {
      res.status(200).send(restraunts)
    })
}

const deleteFavorite = (req, res, sendit) => {
  if (!req.params.id) res.sendStatus(404)
  knex('favorites').where({
    restaurant_id: req.params.id,
    user_id: req.params.userId
  }).del().then(
    res.sendStatus(200))
}

const myFavePage = (req, res, sendit) => {
  let user = req.params.id;
  console.log(user);
  return knex('favorites').where('user_id', user).join('restaurants', 'restaurants.id', '=', 'favorites.restaurant_id').select('*').then((response) => {
    res.status(200).send(response)
  })
}

const putFavorites = (req, res, sendit) => {
  knex('favorites').where({
      restaurant_id: req.body.restId,
      user_id: req.body.userId
    }).update({
      rating: req.body.rating
    })
    .then(count => {
      favorite(req.body.restId)
      res.status(200).send({})
    })
}

const mapToFavorites = (req, res, sendit) => {
  knex('favorites')
    .insert({
      restaurant_id: req.body.restId,
      user_id: req.body.userId
    })
    .then(count => {
      res.sendStatus(201)
    })
}

const getName = (req, res, sendit) => {
  let idForName = req.params.id
  knex('users').where({
      id: idForName
    }).first()
    .then(data => {
      res.status(200).send(data.firstName)
    })

}

module.exports = {
  getRestaurants,
  getRestaurantsDay,
  putFavorites,
  deleteFavorite,
  myFavePage,
  mapToFavorites,
  getName
}
