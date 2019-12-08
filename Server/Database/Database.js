const mongoose = require('mongoose');
const config = require('config');

const MongoDB_url = config.get('MongoDB_URL');

const MongoDB_connection = async () => {
  try {
    await mongoose.connect(MongoDB_url, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log('MongoDB connected . . . ');
  } catch (err) {
    console.log('Unable to connect to MongoDB');
  }
};

module.exports = MongoDB_connection;
