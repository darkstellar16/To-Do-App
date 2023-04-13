const express = require("express");

const route = express.Router();

const updateData = require("../../controller/home/index.js");


route.patch('/:id', updateData.ud) //TO update the task data from the database through update route......


module.exports = route;