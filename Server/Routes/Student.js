const express = require('express');
const Router = express.Router();

const { StudentGet } = require('../Controllers/Student');

Router.get('/getuser/:id', StudentGet);

module.exports = Router;
