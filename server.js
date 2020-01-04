const express = require('express');
const routes = require('./routes');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

//port the server is going to be on
const PORT = process.env.PORT || 8080;

// Define our middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect to the Mongo DB
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('connected', () => {
  console.log('Database connection successfully');
});
connection.on("error", err => {
  console.log("Mongoose default connection error: " + err);
});
app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



  