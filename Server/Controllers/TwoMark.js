const config = require('config');
const que = config.get('que2');
const fetch = require('node-fetch');
const wiki_url = config.get('wiki_url');
const key = config.get('key2');
const StringScore = require('string-score');

exports.TwoMarkGet = (req, res) => {
  const questions = {
    que
  };
  res.json(questions);
};

const wikiEval = (body) => {
  var total_score = 0,
  text = null,
  index = 0;
  for (let i = 0; i < 10; i++) {
    var ans = body[i + 1];
    var response = await fetch(wiki_url + key[index++]);
    var datas = await response.json();
    datas[2].forEach(data => {
      text += data;
  });
  var score = StringScore(text, ans);
  total_score += score * 2;
}
  return total_score;
}
exports.TwoMarkPost = async (req, res) => {
  const wikiMark = wikiEval(req.body);
  const keyMark = ;
};

