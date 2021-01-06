
const express = require('express');
const app = express()
const port = 4000
//include cors libary
const cors = require('cors');
const bodyParser = require("body-parser");
const path = require('path');

//include Mongoose
const mongoose = require('mongoose');

//use cors package
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//configuration telling it where to find build and static folder
app.use(express.static(path.join(__dirname, '../build')));
app.use('../static', express.static(path.join(__dirname, 'build//static')));

// arse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

//parse application/json
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://admin:admin@cluster0.lfbfs.mongodb.net/movies?retryWrites=true&w=majority';
//Mongoose connection
mongoose.connect(myConnectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

