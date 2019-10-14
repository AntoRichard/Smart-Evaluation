const config = require('config');
const fetch = require('node-fetch');
var StringScore = require('string-score');
const que = config.get('que15');
const key = config.get('key15');
const wiki_url = config.get('wiki_url');
var text = null;
exports.FifteenMarkGet = (req, res) => {
  const questions = {
    que
  };
  res.json(questions);
};

exports.FifteenMarkPost = async (req, res) => {
  const ans = req.body['1'];
  const response = await fetch(wiki_url + key[0]);
  const datas = await response.json();
  datas[2].forEach(data => {
    text += data;
  });
  const score = StringScore(text, ans);
  res.json({
    score
  });
  console.log(score);
};
