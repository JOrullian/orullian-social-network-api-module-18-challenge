const { connect, connection } = require('mongoose');

// MongoDB connection string
const connectionString = 'mongodb://127.0.0.1:27017/SocialNetworkDB';

// Connect to MongoDB
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Error handling for the connection
connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = connection;
