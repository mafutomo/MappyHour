'use strict';
const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
const router = require('./routes/routes.js')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// body parser
// cookie parser at some point
app.use(express.static('../public'))

app.use('/', router)

app.use((req,res,sendit)=>{
  res.sendStatus(506)
})


app.listen(port, ()=>{
  console.log(`you are now tunned to ${port} "the bees knees"`)
})


module.exports = app;
