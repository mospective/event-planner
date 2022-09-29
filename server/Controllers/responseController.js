const Response = require("../models/Response");

const createResponse = async (req, res) => {

    try {
        const responseItem = await Response.create(req.body);
        res.send({
            message: "A new response has been created,",
            record: responseItem
        });
    } catch (e) {
        console.error(e);
        console.log("error:", e);
    }
};

const getAllResponses = async (req, res) => {
    const responseItem = await Response.findAll();
    res.send(responseItem);
};

module.exports = {
    createResponse,
    getAllResponses
}
