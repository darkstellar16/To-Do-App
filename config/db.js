const mongoose = require("mongoose");

const url = "mongodb+srv://shubham:shubh@cluster0.ljdljew.mongodb.net/?retryWrites=true&w=majority";

const Connection = async () => {

    try {

        mongoose.connect(url, { useNewUrlParser: true })
        console.log("Database mongoDb connected");

    } catch (error) {

        console.log(error);
    }
}


module.exports = Connection;