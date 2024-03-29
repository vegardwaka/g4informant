const express = require('express')
const NodeCache = require( "node-cache" )
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const multer  = require('multer')

const app = express()
const fs = require('fs')

const weatherCache = new NodeCache()
const locationCache = new NodeCache()
       
app.use(express.static("test"))

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://g4informant.com')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers')
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const path = require('path')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'Images'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage })

app.post('/images/:name', upload.single('myImage'), (req, res) => {
  res.send('File uploaded successfully!')
});

app.use(express.static(path.join(__dirname, 'Images')))
app.get('/images/:name', function (req, res) {
  const imageName = req.params.name
  res.sendFile(path.join(__dirname, 'Images', imageName))
});

app.post('/data/:name', (req, res) => {
  const message = req.body
  const data = { message: 'Saved succ' }
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

app.listen(process.env.PORT || 8080, () => {
  console.log('Server listening')
})