const express = require('express')
const app = express()
const port = 3001
const db = require('./db')

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
}); 


app.get('/bruker/:epost&:passord', (req, res) => {
  db.getUsers(req.params.epost, req.params.passord)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.post('/api_foresporsel', (req, res) => {
  db.createRequest(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.delete('/test/:id', (req, res) => {
  db.deleteRequest(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(500).send(error);
  })
})


app.use('/login', (req, res) => {
  res.send({
      token: 'flexnes'
  })
})

app.get('/weather', (req, res) => {
  db.getWeather(req.params.id)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {
    res.status(400).send(error);
  })
})



app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})