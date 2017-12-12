const express = require('express')
const router = express.Router()
const knex = require('../../knex');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
const cryptic = require('../queries/bcrypt.js')
const queries = require('../queries/queries.js')

router.use(express.static('public'))


router.get('/favorites/:id', queries.myFavePage)

router.get('/restaurants/',queries.getRestaurants)

router.get('/restaurants/:name',queries.getRestaurantsName)

router.post('/user/',cryptic.compare)

router.post('/users/',cryptic.store)//no touchy

router.post('/favorite/', (req,res,sendit)=>{
  res.sendStatus(201)
})

//no touchy
router.delete('/favorite/:id/:userId', queries.deleteFavorite)
//no touchy

router.put('/favorites/',queries.putFavorites)

module.exports = router
