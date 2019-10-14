const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  roll_no: {
    type: Number,
    required: true
  },
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

const userDetailsModel = new mongoose.model('details', userDetailsSchema);

module.exports = userDetailsModel;
