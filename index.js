/* jshint esversion:6 */
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//body parser middleware
app.use(express.json());

// connecting to mongodb
const mongouri = require('./config/keys.js').mongoURI;
mongoose.connect(mongouri)
    .then( () => console.log('Connected to MongoDB'))
    .catch( err => console.log('Error while connecting to MongoDB', err));

// Homepage route
app.get('/' ,(req,res) => {
    res.send("Welcome to Bookstore app");
});

// Starting server on port
port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));