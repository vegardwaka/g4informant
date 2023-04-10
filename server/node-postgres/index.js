const express = require('express')
const NodeCache = require( "node-cache" );
const fetch = require('node-fetch')
const app = express()

const myCache = new NodeCache();
       
app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers')
  next();
}) 

app.get('/APIClock/:region&:by', async (req, res) => {
  try {
    const response = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${req.params.region}/${req.params.by}`)
    const data = await response.json()
    res.send(data)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error retrieving data')
  }
})

app.get('/Weather/:lat&:lon', async (req, res) => {
  if(myCache.has(req.params.lat + req.params.lon)) {
    console.log("Cached")
    res.send(myCache.get(req.params.lat + req.params.lon))
    return
  }
  else {
  try {
    const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${req.params.lat}&lon=${req.params.lon}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'g4-informant, vebteo@gmail.com',
        }}) 
    const data = await response.json();
    res.send(data)
    let x = Math.random() * 900
    myCache.set(req.params.lat + req.params.lon, data, 3600+x)
    console.log("Not cached")
  } catch (error) {
    console.error(error)
    res.status(500).send('Error retrieving data')
  }
}})

app.listen(3001, () => {
  console.log('Server listening on port 3001')
})