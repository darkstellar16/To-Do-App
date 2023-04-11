const express = require("express");

const route = express.Router();

const data = require("../../models/dataModel.js");

const taskData = require("../../controller/home/index.js");

const formData = require("../../controller/home/index.js");

route.get('/', formData.fd);  //To render the form on the home page..

route.post('/', taskData.td); //To pass the form data to the database through post route...












module.exports = route;
