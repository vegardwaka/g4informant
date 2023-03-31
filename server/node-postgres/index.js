const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
}); 

app.get('/APIClock:region&:by', async (req, res) => {
  try {
    const response = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${req.params.region}/${req.params.by}`);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});