const express = require('express');
//create our express server
const app = express();

require('dotenv').config();
const mongoose = require('mongoose');

// //require our route files
// const usersRouter = require('./routes/users');
// const videosRouter = require('./routes/videos');
// const AuthRouter = require('./routes/auth');


const path = require('path');

//port the server is going to be on
const PORT = process.env.PORT || 3001;

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

// Add routes file
// app.use('/users', usersRouter);
// app.use('/videos', videosRouter);
// app.use('/auth', AuthRouter);

// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static( 'client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
//   });
// }

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



  