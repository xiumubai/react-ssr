let express = require('express');
const app = express();

app.get('/api/course/list', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Content-type', 'application/json;charset=utf-8');
  res.json({
    code: 0,
    list: [
      { name: 'react-ssr', id: 1 },
      { name: 'react-redux', id: 2 },
    ],
  });
});

app.listen(9090, () => {
  console.log('http://localhost:9000');
});
