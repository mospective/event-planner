const Event = require("../models/Event");
const Activity = require("../models/Activity");
const Contact = require("../models/Contact");
const Date = require("../models/Date");

function isEmpty(object) {  
    return Object.keys(object).length === 0
}

const getAllEvents = async (req, res) => {
    console.log(res);
    const events = await Event.findAll({
        include: [{
            model: Activity,
            include: [{
                model: Contact
            }, {
                model: Date
            }]
        }]
    });
    res.send(events);
}

const createEvent = async (req, res) => {

    try {

        const create = await Event.create(
            req.body, {
            include: [{
                model: Activity,
                include: [{
                    model: Contact
                }, {
                    model: Date
                }]
            }]
        });

        res.send({
            message: "Event created",
            record: create
        });

    } catch (error) {
        console.log(error);
    }

}

const getEvent = async (req, res) => {
    const requestId = req.params.id;
    const event = await Event.findOne({ where: { id: requestId }, include: [{
        model: Activity,
        include: [{
            model: Contact
        }, {
            model: Date
        }]
    }] })
    res.send(event);
}

const updateEvent = async (req, res) => {
    const requestId = req.params.id;
    const event = await Event.findOne({ where: { id: requestId } });

    event.eventName = req.body.eventName;
    await event.save();
    res.send({
        message: "Even updated",
        record: event
    });
}

const deleteEvent = async (req, res) => {
    const requestId = req.params.id;
    await Event.destroy({ where: { id: requestId } });
    res.send('Event removed');
}

module.exports = {
    getAllEvents,
    createEvent,
    getEvent,
    updateEvent,
    deleteEvent
}