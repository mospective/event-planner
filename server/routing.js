const eventController = require("./Controllers/eventController.js");
const activityController = require("./Controllers/activityController.js");
const contactController = require("./Controllers/contactController.js");
const dateController = require("./Controllers/dateController.js");
const responseController = require("./Controllers/responseController.js");

const routing = (app) => {
    app.get("/event", eventController.getAllEvents);
    app.post("/event", eventController.createEvent);
    app.get("/event/:id", eventController.getEvent);
    app.put("/event/:id", eventController.updateEvent);
    app.delete("/event/:id", eventController.deleteEvent);

    app.get("/activity", activityController.getAllActivities);
    app.get("/activity/:id", activityController.getActivity);
    app.post("/activity", activityController.createActivity);
    app.put("/activity/:id", activityController.updateActivity);
    app.delete("/activity/:id", activityController.deleteActivity);

    app.get("/contact", contactController.getAllContacts);
    app.post("/contact", contactController.createContact);

    app.get("/dates", dateController.getAllDates);
    app.post("/dates", dateController.createDate);

    app.post("/response", responseController.createResponse);
    app.get("/response", responseController.getAllResponses);
    
};

module.exports = routing;