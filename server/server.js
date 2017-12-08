'use strict';

const express = require('express')
const app = express()
const port = process.env.PORT || 5432


app.listen(port, ()=>{
  `you are now tunned to ${port} "the bees knees"`
})


module.exports = app;
