const details = require('../Models/UserDetails');

exports.StudentGet = async (req, res, next) => {
  try {
    const roll_no = req.params.id;
    const usr = await details.findOne({ roll_no });
    res.status(201).json({
      usr,
      msg: 'success'
    });
  } catch (err) {
    res.status(500).json({
      msg: 'Internal server problem'
    });
  }
};
