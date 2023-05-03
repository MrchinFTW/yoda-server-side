const { MongoClient } = require('mongodb');
const uri =
	'mongodb+srv://niradmin:JPU3fHMlio664vak@workshops.9cie110.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri);

let db;

module.exports.connectToDb = (callback) => {
	client
		.connect()
		.then((c) => {
			db = c.db('Workshops');
			console.log('db connected');
			callback();
		})
		.catch((err) => {
			console.log(err);
		});
};

module.exports.getDB = () => {
	return db;
};
