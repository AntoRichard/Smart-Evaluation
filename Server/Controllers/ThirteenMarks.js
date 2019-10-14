const config = require('config');
const fetch = require('node-fetch');
const wiki_url = config.get('wiki_url');
const que = config.get('que13');
const key = config.get('key13');
const StringScore = require('string-score');
exports.ThirteenMarkGet = (req, res) => {
  const questions = {
    que
  };
  res.json(questions);
};

exports.ThirteenMarkPost = async (req, res) => {
  console.log(req.body);
  var total_score = 0,
    text = null,
    index = 0;
  for (let i = 0; i < 5; i++) {
    var ans = req.body[i + 1];
    var response = await fetch(wiki_url + key[index++]);
    var datas = await response.json();
    datas[2].forEach(data => {
      text += data;
    });
    var score = StringScore(text, ans);
    total_score += score * 13;
  }
  console.log(total_score);
};
