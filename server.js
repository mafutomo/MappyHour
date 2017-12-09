'use strict';

const express = require('express')
const app = express()
const port = 8062
const router = require('./server/routes/routes.js')
const bodyParser = require('body-parser')
// body parser
// cookie parser at some point
app.use(express.static('public'))

app.get('/', function (req, res, next) {
  res.send('Hello There')
})

app.use((req,res,sendit)=>{
  res.sendStatus(506)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, ()=>{
  console.log(`you are now tunned to ${port} "the bees knees"`)
})






module.exports = app;
