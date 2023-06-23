// 1) Run npm install. Import express - Done for you! Just uncomment the line below
// 2) Create a server - Done for you! Just uncomment the line below
// 3) Use express middleware - Done for you! Just uncomment the line below

const express = require("express");
const app = express();
const port = 3000;
// json body-parser
const bodyParser = require("body-parser");
const users = require("./models/users");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//4) initiate 3 methods
//4a) Create get - 'greeting/:name'
app.get("/greeting/:name", (req, res) => {
  res.send(`Wow! Hello there, ${req.params.name}!`);
});

//4b) Create post - 'user/:name'
app.post("/user", (req, res) => {
  console.log(">>> request body: ", req.body);

  if (!!req.body.name) {
    users.push(
    //   name: req.body.name,
      req.body.name,
    );
    res.send(`User ${req.body.name} added successfully.`);
  } else res.send(`An error occured, please try again.`);
});

//4c) Create get - 'users'
app.get("/users", (req, res) => {
    // res.render('users/index', {users: users});
    res.send(
        users
    );
})

// 5) Listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Dont remove this line, needed for testing!
module.exports = app;
