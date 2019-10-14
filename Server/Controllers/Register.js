const { validationResult } = require('express-validator');
const User = require('../Models/User');

exports.registerGet = (req, res) => {
  res.status(200).json({
    msg: 'register get'
  });
};

exports.registerPost = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({
      msg: errors.array()
    });
  }

  try {
    const { name, email, phone, password } = req.body;
    const newUser = new User({
      name,
      email,
      phone,
      password
    });
    await newUser.save();
    res.status(202).send(newUser);
  } catch (err) {
    res.status(500).json({
      msg: 'Internal server problem'
    });
  }
};
