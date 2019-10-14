const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const Users = require('../Models/User');
const userDB = require('../Models/User');
const config = require('config');

exports.loginGet = (req, res) => {
  res.status(200).json({
    msg: 'Login Get'
  });
};

exports.loginPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      msg: errors.array()
    });
  }
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    console.log(req.body, password);
    if (user.password == password) {
      const token = jwt.sign(
        {
          name: user.name
        },
        config.get('JWT_SECRET'),
        {
          expiresIn: '1h'
        }
      );
      res.status(200).json({
        token: token,
        msg: 'success'
      });
      userDB.updateOne(
        { isLoggedIn: false },
        { isLoggedIn: true },
        (err, result) => {
          if (err) throw err;
          console.log(result);
        }
      );
    } else {
      res.statue(402).json({
        msg: 'Authentication failed'
      });
    }
  } catch (err) {
    res.status(402).json({
      msg: 'Auth failed'
    });
  }
};
