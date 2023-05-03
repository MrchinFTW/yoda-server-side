const express = require('express');
// const { connectToDb, getDB } = require('../../db/database');

const router = express.Router();

router.use('/workshops', (req, res, next) => {
	if (!req.session.workshops) {
		req.session.workshops = [];
	}
	next();
});

router.get('/workshops', (req, res) => {
	res.json(req.session.workshops);
});

module.exports = router;
