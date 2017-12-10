const knex = require('../knex')
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')

const writePass = ()=>{
  bcrypt.hash('georgia', 4).then(function(hash) {
  console.log(hash)
})
}

module.exports = {
  writePass
}
