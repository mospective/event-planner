const Date = require("../models/Date");
// const contactservice = require("../services/contactservice");

const createDate = async (req, res) => {
    const dateItem = await Date.create(req.body);
    res.send({
        message: "A new date has been created,",
        record: dateItem
    });
};

const getAllDates = async (req, res) => {
    const dateItem = await Date.findAll();
    res.send(dateItem);
};

module.exports = {
    createDate,
    getAllDates
}