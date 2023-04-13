const express = require("express");

const bodyParser = require('body-parser');

const dataConnection = require("./config/db.js");
dataConnection();

const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());


// app.set('view engine', 'ejs');

// app.use(express.static('public'));

const main = require("./routes/index.js");

app.use('/', main);


app.listen(8000, () => {
    console.log("Server is Running");
})

