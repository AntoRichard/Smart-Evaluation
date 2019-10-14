const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  Data: {
    type: Date,
    default: Date.now()
  },
  isLoggedIn: {
    type: Boolean,
    default: false
  }
});

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;
