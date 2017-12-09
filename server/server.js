'use strict';

const express = require('express')
const app = express()
const port = process.env.PORT || 5432
const routes = require('./routes/routes.js')


app.listen(port, ()=>{
  `you are now tunned to ${port} "the bees knees"`
})

app.use(routes)


module.exports = app;
