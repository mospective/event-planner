const Response = require("../models/Activity");

// const updateActivity = async (req, res) => {
//     const requestId = req.params.id;
//     const activityItem = await Activity.findOne({ where: { id: requestId } });

//     activityItem.name = req.body.name;
//     activityItem.description = req.body.description;
//     activityItem.image = req.body.image;
//     activityItem.dates = req.body.dates;
//     activityItem.evenId = req.body.eventId;

//     await activityItem.save();
//     res.send({
//         message: "Activity updated",
//         record: activityItem
//     });
// };