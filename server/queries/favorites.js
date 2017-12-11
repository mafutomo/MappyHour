const express = require('express')
const router = express.Router()
const knex = require('../../knex')

const updateRating = (restId,userId) => {
  knex.select('rating').from('favorites').where({restaurant_id:restId, user_id:userId})
  .then(ratings=>{
    var sum = ratings.map(val => val.rating).reduce((a, b) => Number(a) + Number(b))
    var avg = (sum+3)/(ratings.length+1)
    knex('restaurants').where({id:restId}).update({averageRating: avg}).then(count=>{
      return;
    })
  })
}

module.exports = updateRating
