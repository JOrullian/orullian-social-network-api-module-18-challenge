const { connect, connection } = require('mongoose');
require('dotenv').config();

// Connect to MongoDB
connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Error handling for the connection
connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

module.exports = connection;
