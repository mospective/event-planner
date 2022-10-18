const Response = require("../models/Response");
const Activity = require("../models/Activity");
const Date = require("..//models/Date");

const createResponse = async (req, res) => {

    let response = req.body;
    console.log("================================");
    console.log(response);
    console.log("================================");


    try {
        // Adding one vote to the selected Activity record
        const activityItem = await Activity.findOne({ where: { id: response.activityId } });
        console.log("activityItem");
        console.log(activityItem);
        let counter = parseInt(activityItem.votes);
        activityItem.votes = counter + 1;
        await activityItem.save();

        // Add one vote on specific date for the chosen activity
        const activityDateItem = await Date.findOne({ where: { id: response.activityDateId} });
        console.log("----------------------------");
        console.log(activityDateItem);
        console.log("----------------------------");
        let dateCounter = parseInt(activityDateItem.votes);
        activityDateItem.votes = dateCounter + 1;
        await activityDateItem.save();

        // Actual response to response
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
