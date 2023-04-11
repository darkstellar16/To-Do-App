const data = require("../../models/dataModel.js");


const formData = (req, res) => {
    res.render('data');
}



const taskData = (req, res) => {

    const dataInfo = new data({
        data: req.body.name
    })
    dataInfo.save();
}


module.exports = { fd:formData,  td: taskData };1   