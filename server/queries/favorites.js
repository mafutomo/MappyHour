const express = require('express')
const router = express.Router()
const knex = require('../../knex')

const updateRating = (restId) => {
  knex.select('rating').from('favorites').where({
      restaurant_id: restId
    })
    .then(ratings => {
      var sum = ratings.map(val => val.rating).reduce((a, b) => Number(a) + Number(b))
      var avg = (sum) / (ratings.length)
      knex('restaurants').where({
        id: restId
      }).update({
        averageRating: avg
      }).then(count => {
        return;
      })
    })
}

module.exports = updateRating
