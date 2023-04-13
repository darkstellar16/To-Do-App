const express = require("express");


const route = express.Router();


const data = require("./home/index.js");
const update = require("./update/index.js");

route.use('/', data); //home
route.use('/update', update); //update


module.exports = route;