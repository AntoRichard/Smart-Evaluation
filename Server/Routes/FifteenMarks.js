const express = require('express');
const {
  FifteenMarkGet,
  FifteenMarkPost
} = require('../Controllers/FifteenMarks');
const Route = express.Router();

Route.get('/fifteen', FifteenMarkGet);

Route.post('/fifteen', FifteenMarkPost);

module.exports = Route;
