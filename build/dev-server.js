const express = require('express');
const data = require('./users.json');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  const query = req.query.q;
  const resultData = query ? data.filter(i => i.name.indexOf(decodeURIComponent(query)) === 0) : data.slice(0, 10);
  res.send(JSON.stringify(resultData));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
