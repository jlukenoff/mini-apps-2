const express = require('express');
const fetch = require('node-fetch');

const app = express();

app.use(express.static('public'));

app.get('/api/:currencyCode/from/:startDate', (req, res) => {
  const { currencyCode, startDate } = req.params;
  const getDateString = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() + 1 < 10 ? `0${date.getDate() + 1}` : date.getDate() + 1;
    return `${year}-${month}-${day}`;
  };
  fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?index=${currencyCode}&start=${startDate}&end=${getDateString(new Date())}`)
    .then(chunk => chunk.json())
    .then((response) => {
      res.send(response);
    }).catch(err => res.end(err));
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
