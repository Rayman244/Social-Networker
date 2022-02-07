const { connect, connection } = require('mongoose');


const connectionString = 'mongodb://localhost:27017/social_networkerDB';

connect(connectionString);

module.exports = connection;