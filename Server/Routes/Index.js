const express = require('express');
const Route = express.Router();
const { IndexGet } = require('../Controllers/Index');

Route.get('/index', IndexGet);

module.exports = Route;
