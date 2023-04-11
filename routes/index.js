const express = require("express");


const route = express.Router();


const data = require("./home/index.js");

route.use('/' ,data);


module.exports = route;