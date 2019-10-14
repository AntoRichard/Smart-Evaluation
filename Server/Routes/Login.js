const route = require('express').Router();
const { check } = require('express-validator');
const { loginGet, loginPost } = require('../Controllers/Login');

route.get('/login', loginGet);

route.post(
  '/login',
  [
    check('email', 'Enter a valid Email')
      .isEmail()
      .exists(),
    check('password', 'Enter a valid password').exists()
  ],
  loginPost
);

module.exports = route;
