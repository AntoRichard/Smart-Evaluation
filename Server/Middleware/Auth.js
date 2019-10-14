const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  console.log(token);
  if (!token) {
    res.status(400).json({ msg: 'no token found' });
  }
  try {
    const gotToken = jwt.verify(token, config.get('JWT_SECRET'));
    req.userToken = gotToken;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'token is not valid' });
  }
};
