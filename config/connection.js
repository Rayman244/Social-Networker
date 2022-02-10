const { connect, connection } = require('mongoose');


const connectionString = 'mongodb://127.0.0.1:27017/social_networkerDB';

connect(connectionString);

module.exports = connection;