const express = require('express');
const router = express.Router();

router.post('/upload', (req, res, next) => {
  const { ques } = req.body;
  console.log(req.body);
});

module.exports = router;
