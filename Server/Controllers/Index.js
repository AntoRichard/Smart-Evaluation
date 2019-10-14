exports.IndexGet = (req, res, next) => {
  // const token = req.userToken;
  // if (token) {
  // res.status(200).json(token);
  res.json({
    msg: 'token'
  });
  // } else {
  // res.status(500).json('no token found');
  // }
};
