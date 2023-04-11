const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    }
})

const data = mongoose.model("data", dataSchema);

module.exports = data;