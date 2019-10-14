const express = require('express');
const { TwoMarkGet, TwoMarkPost } = require('../Controllers/TwoMark');
const Route = express.Router();

Route.get('/two', TwoMarkGet);

Route.post('/two', TwoMarkPost);

module.exports = Route;
