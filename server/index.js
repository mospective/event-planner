const express = require("express");
const path = require("path");
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


// // Add user
// app.post('/users', async (req, res) => {
//     await UserRoute.create(req.body);
//     res.send("User has been inserted");
// });

// // Get all users
// app.get('/users', async (req, res) => {
//     const users = await UserRoute.findAll();
//     res.send(users);
// });

// // Get a user by id
// app.get('/users/:id', async (req, res) => {
//     const requestId = req.params.id;
//     const user = await UserRoute.findOne({ where: { id: requestId } })
//     // const role = await JobRoute.findAll({ where: { role: "role"} });
//     // console.log("===================================")
//     // console.log("role " , role);

//     res.send(user);
// });

// // Get a user and update it
// app.put('/users/:id', async (req, res) => {
//     const requestId = req.params.id;
//     console.log(requestId);
//     const user = await UserRoute.findOne({ where: { id: requestId } });

//     // const role = await JobRoute.findAll({ where: { id: requestId, role: "marketing"} });
//     // console.log("role " , role);

//     console.log("user", user);
//     user.username = req.body.username;
//     await user.save();
//     res.send('updated');
// });

// app.delete('/users/:id', async (req, res) => {
//     const requestId = req.params.id;
//     await UserRoute.destroy({ where: { id: requestId } });
//     res.send('Removed')
// })

const port = process.env.PORT || 8080;

app.listen(port);

console.log(`App is listening on port ${port}`);