const data = require("../../models/dataModel.js");


const formData = async (req, res) => {
    try {
        const dataInfo = await data.find();
        console.log(dataInfo);
        res.send( { info: dataInfo })
    } catch (error) {
        console.log(error);
    }
}


const taskData = async (req, res) => {
    try {

        const info = await data.create({ data: req.body.data });
        console.log(req.body)
        // res.status(301).redirect('/');
        info.save();
        res.status(200).json({
            message: "added successfully",
            data: req.body.data
        })
    }
    catch (error) {
        console.log(error)
    }

}

const deleteData = async (req, res) => {

    const id = req.params.id;
    console.log(id);

    await data.deleteOne({ _id: id }).then(() => {
        res.redirect('/');
        // res.status(200).json({
        //     message: "Deleted",
        // })
        console.log("deleted");
    }).catch((error) => {
        console.log(error);
    })
}

const updateData = async (req, res) => {

    const id = req.params.id;
    console.log(id);

    const information = await data.findByIdAndUpdate(id, req.body, { new: true }).then(() => {

        // res.redirect('/');
        console.log("updated");
    }).catch((error) => {
        console.log(error);
    })

    res.status(200).json({
        message: "Updated",
        id: information
    })
}


module.exports = { fd: formData, td: taskData, dd: deleteData, ud: updateData };