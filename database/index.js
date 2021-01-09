const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nomedobancodedados', { useMongoClient: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;