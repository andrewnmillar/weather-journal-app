// Setup empty JS object to act as endpoint for all routes
endPoint = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening(){
    console.log(`running on localhost: ${port}`);
};

// Respond with JS object when a GET request is made to the homepage
projectData = [] ;

app.get("/all", function (req, res) {
  res.send(projectData);
  console.log(projectData);
})


//Post Route

app.post("/postData", addData);

function addData (req, res) {
    newEntry = {
        temp: req.body.temp,
        date: req.body.date,
        response: req.body.response,
    }
  projectData.push(newEntry);
  res.send(projectData);
  console.log(projectData);
};