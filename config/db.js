const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

const connectDB = async () => {
	try {
		await mongoose.connect(db);
		console.log('MongoDB Connected...');
	} catch (err) {
		console.error(err.message);
		// Exit porcess with failure
		process.exit(1);
	}
}

module.exports = connectDB;
