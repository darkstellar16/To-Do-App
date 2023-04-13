const express = require("express");

const route = express.Router();

// const data = require("../../models/dataModel.js");

const taskData = require("../../controller/home/index.js"); //collected task data..

const formData = require("../../controller/home/index.js"); //collected form data..

const deleteData = require('../../controller/home/index.js'); //collected delete data..

const updateData=require('../../controller/home/index.js');  //update the added task..

route.get('/', formData.fd);  //To render the form on the home page.....

route.post('/', taskData.td); //To pass the form data to the database through post route......

route.delete('/:id', deleteData.dd)  //To delete the task data from the database through get route......

route.patch('/update/:id',updateData.ud) //TO update the task data from the database through update route......


module.exports = route;
