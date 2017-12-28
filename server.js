'use strict';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express')
const app = express()
const port = process.env.PORT || '3001'
const router = require('./server/routes/routes.js')
const bodyParser = require('body-parser')
const path = require('path')
app.use(express.static(path.join('sauce')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/', router)

app.listen(port, () => {
  console.log(`you are now tunned to ${port} "the bees knees"`)
})

module.exports = app;
