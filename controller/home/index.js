const data = require("../../models/dataModel.js");


const formData = async (req, res) => {
    try {
        const dataInfo = await data.find();
        console.log(dataInfo);
        res.render('data', { info: dataInfo })
    } catch (error) {
        console.log(error);
    }
}


const taskData = (req, res) => {

    const dataInfo = new data({
        data: req.body.data
    })
    dataInfo.save();
    res.redirect('/');
}

const deleteData = async (req, res) => {

    const id = req.params.id;
    console.log(id);

    await data.deleteOne({ _id: id }).then(() => {
        res.redirect('/');
        console.log("deleted");
    }).catch((error) => {
        console.log(error);
    })
}

module.exports = { fd: formData, td: taskData, dd: deleteData };