const express = require("express");

const route = express.Router();

// const data = require("../../models/dataModel.js");

const taskData = require("../../controller/home/index.js"); //collected task data

const formData = require("../../controller/home/index.js"); //collected form data

const deleteData = require('../../controller/home/index.js'); //collected delete data

route.get('/', formData.fd);  //To render the form on the home page.....

route.post('/', taskData.td); //To pass the form data to the database through post route......

route.get('/:id', deleteData.dd)  //TO delete the task data from the database through get route......


module.exports = route;
