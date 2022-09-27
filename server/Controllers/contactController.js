const Contact = require("../models/Contact");
// const contactservice = require("../services/contactservice");

const createContact = async (req, res) => {
    const contact = await Contact.create(req.body);
    res.send({
        message: "A new contact has been created,",
        record: contact
    });
};

const getAllContacts = async (req, res) => {
    const contact = await Contact.findAll();
    res.send(contact);
};

module.exports = {
    createContact,
    getAllContacts
}