const express = require('express');
const path = require('path');

const app = express();
const port = 1500;

app.use('/home', (req, res) => {
	res.send('start');
});

app.use('/', (req, res) => {
	res.status(404);
	res.sendFile(path.join(__dirname, 'files', '404.html'));
});

app.listen(port, () => {
	console.log(`you are listenin on port ${port}`);
});
