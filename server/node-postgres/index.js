const express = require('express')
const NodeCache = require( "node-cache" )
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const multer  = require('multer')

const app = express()
const fs = require('fs')

const weatherCache = new NodeCache()
const locationCache = new NodeCache()
       
app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers')
  next()
})
const path = require('path')
const upload = multer({ dest: path.join(__dirname, '/Images/')})
app.post(`/images/:name`, upload.single('myImage'), (req, res) => {
  console.log(req.params.name);
console.log("SKRIK TIL VEBJØRN OM DU SER DETTE")
  try {
    fs.writeFileSync(`Images/${req.params.name}.png`, req.file.buffer);
    console.log('Image saved');
    res.status(200).send('Image saved');
  } catch (error) {
    console.error('Error saving image data:', error);
    res.status(500).send('Error saving image data');
  }
})

app.post('/data/:name', (req, res) => {
  const message = req.body
  const data = { message: 'Saved succ' }
  console.log(message)
  res.json(data)
  try {
  fs.writeFile(`infoScreens/${req.params.name}.js`, JSON.stringify(message), 'utf8' , (err) =>{
    if(!err){
      console.log('File written!')
    } else {
      console.error('error writing to file')
      throw new Error(err)
    } 
  })
} catch (error) {
  console.error(error)
  res.status(500).send('Error saving data')}
})

app.delete('/data/:name', (req, res) => {
  fs.unlink(`infoScreens/${req.params.name}.js`, function (err) {
    if (err) throw err
    console.log('File deleted!')
  })
})

app.get('/data/:name', (req, res) => {
  const message = req.body
  fs.readFile(`infoScreens/${req.params.name}.js`, 'utf8', function (err, data) {
    if (err) throw err
    res.send(data)
  })
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

app.get('/Location/:city&:state', async (req, res) => {
  if(locationCache.has(req.params.city + req.params.state)) {
    console.log("location is Cached ")
    res.send(locationCache.get(req.params.city + req.params.state))
    return
  }
else {
try {
  const response = await fetch(`https://nominatim.openstreetmap.org/search?city=${req.params.city}&state=${req.params.state}&format=json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'g4-informant, vebteo@gmail.com',
      }}) 
  const data = await response.json()
  res.send(data)
  locationCache.set(req.params.city + req.params.state, data, 3600)
  console.log("Location not cached")
} catch (error) {
  console.error(error)
  res.status(500).send('Error retrieving location data')
}
}})

app.get('/Weather/:lat&:lon', async (req, res) => {
  if(weatherCache.has(req.params.lat + req.params.lon)) {
    console.log("Weather is Cached")
    res.send(weatherCache.get(req.params.lat + req.params.lon))
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
    const data = await response.json()
    res.send(data)
    let x = Math.random() * 900
    weatherCache.set(req.params.lat + req.params.lon, data, 3600+x)
    console.log("Weather not cached")
  } catch (error) {
    console.error(error)
    res.status(500).send('Error retrieving weather data')
  }
}})

app.listen(3001, () => {
  console.log('Server listening on port 3001')
})