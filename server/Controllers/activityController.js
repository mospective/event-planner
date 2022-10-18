const Activity = require("../models/Activity");

const createActivity = async (req, res) => {

    try {
        const activityItem = await Activity.create(req.body);
        res.send({
            message: "Activity has been created.",
            record: activityItem
        });
    } catch (e) {
        console.error(e);
    }
    
};

const getAllActivities = async (req, res) => {
    const activityItem = await Activity.findAll();
    res.send(activityItem);

};

const getActivity = async (req, res) => { 
    const requestId = req.params.id;
    const activityItem = await Activity.findOne({ where: { id: requestId} });
    res.send(activityItem);
};

const updateActivity = async (req, res) => {
    const requestId = req.params.id;
    const activityItem = await Activity.findOne({ where: { id: requestId } });

    activityItem.name = req.body.name;
    activityItem.description = req.body.description;
    activityItem.image = req.body.image;
    activityItem.dates = req.body.dates;
    activityItem.eventId = req.body.eventId;
    activityItem.votes = req.body.votes;

    await activityItem.save();
    res.send({
        message: "Activity updated",
        record: activityItem
    });
};

const deleteActivity = async (req, res) => {
    const requestId = req.params.id;
    await Activity.destroy({ where: { id: requestId } });
    res.send('Removed')
};

module.exports = {
    createActivity,
    getAllActivities,
    getActivity,
    updateActivity,
    deleteActivity
}
