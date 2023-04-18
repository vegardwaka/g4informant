import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Blog from './components/Blog'
import Login from './components/Login'
import About from './components/About'
import Request from './components/Request'
import Workbench from './components/Workbench'
import UserCreate from './components/UserCreate'
import Weather from './components/workbenchComponents/Weather'
import NotFound from './components/NotFound'
import useToken from './components/useToken'
import Profile from './components/Profile'
import Display from './components/Display'
import Midlertidig from './components/Midlertidig'

export default function App() {
  let pepe = "pepe";
  const { token, setToken } = useToken()
  const infoscreen = []
  fetch('https://g4informant.com/api.php/records/infoskjerm/?include=tittel', {
    method: 'GET',
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    } else {
      return response.json()}
  })
  .then(data => {
    pepe = data.records[0]
    console.log(JSON.stringify(data.records[0]))
    for (let i = 0; i < data.records.length; i++) {
      infoscreen[i] = data.records.tittel[i]
      //infoscreen[i] returnerer f.eks: "tittel":"1234567". Dette må splittes opp i to, slik at det kun er tallet som blir brukt i pathen.
      
      //Router.push(`/Display/${data.records[i]}`)
      console.log("infoscreen:" + JSON.stringify(infoscreen[0]))
    }
  })
  let innhold = "<div>Hei</div>"

  if(!localStorage.getItem('token')) { 
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div className="content">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Blog' element={<Blog/>}/>
              <Route path='/Profile' element={<Profile/>}/>
              <Route path={`/Midlertidig/${infoscreen[0]}`} element={<Midlertidig variable={infoscreen[0]} />} />
              <Route path='/Login' element={<Login setToken={setToken} />} />
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </Router>
    ) 
  }
  
  return (
      <Router>
        <div className="App"> 
          <NavBar/>
          <div className="content">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Blog' element={<Blog/>}/>
              <Route path='/Profile' element={<Profile/>}/>
              <Route path='/Login' element={<Login setToken={setToken} />} />
              <Route path='/Request' element={<Request/>}/>
              <Route path='/Workbench' element={<Workbench/>}/>
              <Route path='/Weather' element={<Weather/>}/>
              <Route path='Display' element={<Display/>}/>
              <Route path={`Midlertidig/${infoscreen[0]}`} element={<Midlertidig variable={infoscreen[0]} />} />
              <Route path='/UserCreate' element={<UserCreate/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </div>
          <div className="footer">
            <Footer/>
          </div>
        </div>
      </Router>
  );
}