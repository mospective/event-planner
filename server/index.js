const express = require("express");
const sequelize = require("./database");
const Associations = require("./associate");

// { alter: true }
// { force: true }

sequelize.sync().then(() => console.log("db is ready"))
.catch((err) => {
    console.log("================================");
    console.log(err);
    console.log("================================");
});

Associations();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("./routing")(app);

const port = process.env.PORT || 8080;

app.listen(port);

console.log(`App is listening on port ${port}`);