const express = require('express')
const router = express.Router()
const knex = require('../../knex');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const cryptic = require('../queries/bcrypt.js')
const queries = require('../queries/queries.js')

router.use(express.static('public'))

//no touchy
router.get('/favorites/:id', queries.myFavePage)
//no touchy

router.get('/restaurants/',queries.getRestaurants)

router.get('/restaurants/:day',queries.getRestaurantsDay)

router.post('/user/',cryptic.compare)

router.post('/users/',cryptic.store)//no touchy

router.post('/favorites/', queries.mapToFavorites)

//no touchy
router.delete('/favorites/:id/:userId', queries.deleteFavorite)
//no touchy

router.put('/favorites/',queries.putFavorites)

module.exports = router
