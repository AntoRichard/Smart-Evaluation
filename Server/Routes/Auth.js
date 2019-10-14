const express = require('express');
const userDB = require('../Models/User');
const Route = express.Router();

Route.get('/Auth', (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  res.json({
    token
  });
});

module.exports = Route;
