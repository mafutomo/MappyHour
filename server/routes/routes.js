const express = require('express')
const router = express.Router()
const knex = require('../../knex');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const cryptic = require('../queries/bcrypt.js')
const queries = require('../queries/queries.js')

router.get('/favorites/:id', queries.myFavePage)

router.get('/restaurants/',queries.getRestaurants)

// router.get('/',queries.getRestaurants)

router.get('/restaurants/:name',queries.getRestaurantsName)

router.post('/user/',cryptic.compare)

router.post('/users/',cryptic.store)//no touchy

router.post('/favorites/', queries.mapToFavorites)

router.delete('/favorites/:id/:userId', queries.deleteFavorite)

router.put('/favorites/',queries.putFavorites)

module.exports = router
