const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const static = express.static('public'); //no public folder at this moment... favicon,scripts.
const session = require('express-session');
const workshopRouter = require('./api/workshop/workshop');
const { connectToDb, getDB } = require('./db/database');

const app = express();
const port = 1500;

app.use(
	session({
		secret: 'workshop-secret-key',
		resave: true,
		saveUninitialized: true,
	})
);

app.use(static);

app.use(bodyParser.json());

app.use('/api', workshopRouter);

app.use('/home', (req, res) => {
	res.send('start');
});

app.use('/', (req, res) => {
	res.status(404);
	res.sendFile(path.join(__dirname, 'files', '404.html'));
});

connectToDb(() => {
	app.listen(port, () => {
		console.log(`you are listenin on port ${port}`);
	});
});
