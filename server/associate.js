const eventAssociate = require("./models/Event");
const activityAssociate = require("./models/Activity");
const contactAssociate = require("./models/Contact");
const dateAssociate = require("./models/Date");

const Associations = () => {
    eventAssociate.hasMany(activityAssociate, {
        foreignKey: "eventId",
        onDelete: "CASCADE"
    });
    activityAssociate.belongsTo(eventAssociate);

    activityAssociate.hasOne(contactAssociate, {
        foreignKey: "activityId",
        onDelete: "CASCADE"
    });
    contactAssociate.belongsTo(activityAssociate);

    activityAssociate.hasMany(dateAssociate, {
        foreignKey: "activityId",
    });
    dateAssociate.belongsTo(activityAssociate);

};

module.exports = Associations;