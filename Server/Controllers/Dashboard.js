const UserData = require('../Models/UserDetails');

exports.getDashboard = async (req, res, next) => {
  try {
    var sort = { name: 1 };
    const response = await UserData.find().sort(sort);
    console.log(response);
    res.status(201).json(response);
  } catch (err) {
    res.json(500).json({
      msg: 'Internal server problem'
    });
  }
};
