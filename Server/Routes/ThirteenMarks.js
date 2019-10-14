const express = require('express');
const {
  ThirteenMarkGet,
  ThirteenMarkPost
} = require('../Controllers/ThirteenMarks');
const Route = express.Router();

Route.get('/thirteen', ThirteenMarkGet);

Route.post('/thirteen', ThirteenMarkPost);

module.exports = Route;
