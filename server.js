const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const SavedVideos = require('./controllers/videos');
const User = require('./controllers/users');
const Auth = require('./controllers/auth');

require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.set('useCreateIndex', true);
const uri =
	'mongodb+srv://dbMia:mia123@cluster0-kch9q.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;
connection.on('connected', () => {
	console.log('Database connection successfully');
});
connection.on('error', err => {
	console.log('Mongoose default connection error: ' + err);
});

app.use('/api/Video', SavedVideos);
app.use('/api/User', User);
app.use('/api/auth', Auth);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
	});
}

const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
	console.log(`🌎 ==> API Server now listening on PORT ${PORT}!`);
});
