const router = require('express').Router();
const { check } = require('express-validator');
const { registerGet, registerPost } = require('../Controllers/Register');

router.get('/register', registerGet);

router.post(
  '/register',
  [
    check('name', 'Invalid Name')
      .not()
      .isEmpty(),
    check('email', 'Invalid Email').isEmail(),
    check('phone', 'Enter valid phone number').isNumeric(),
    check('password', 'Enter a valid password').exists()
  ],
  registerPost
);

module.exports = router;
