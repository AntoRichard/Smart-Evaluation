const express = require('express');
const Route = express.Router();
const { getDashboard } = require('../Controllers/Dashboard');

Route.get('/getdata', getDashboard);

module.exports = Route;
