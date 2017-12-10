'use strict';

const express = require('express')
const app = express()
const port = process.env.PORT || '3000'
const router = require('./routes/routes.js')
const bodyParser = require('body-parser')
// body parser
// cookie parser at some point

app.listen(port, ()=>{
  console.log(`you are now tunned to ${port} "the bees knees"`)
})

app.use('/', router)
app.use((req,res,sendit)=>{
  res.sendStatus(506)
})




module.exports = app;
