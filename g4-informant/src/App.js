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
import NotFound from './components/NotFound'
import useToken from './components/useToken'
import Profile from './components/Profile'
import FullDisplay from './components/FullDisplay'
import Documentation from './components/Documentation'

export default function App(props) {
  const [show, setShow] = useState(true)
  const { token, setToken } = useToken()
  
  if(!localStorage.getItem('token')) { 
    return (
      <Router>
        <div className="App">
        {show && <NavBar/>} 
          <main className="content">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Documentation' element={<Documentation />}/>
              <Route path='/Blog' element={<Blog  onShow={setShow}/>}/>
              <Route path='/Login' element={<Login setToken={setToken} />} />
              <Route path='/screen/:infoscreen' element={<FullDisplay onShow={setShow} fulldisplay={true}/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </main>
        </div>
        <div className="footer">
          {show && <Footer/>}
        </div> 
      </Router>
    ) 
  }
  
  return (
      <Router>
        <div className="App"> 
        {show && <NavBar/>}
          <main className="content">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Documentation' element={show && <Documentation />}/>
              <Route path='/Blog' element={<Blog  onShow={setShow}/>}/>
              <Route exact path='/Profile' element={<Profile/>}/>
              <Route path='/Login' element={<Login setToken={setToken} />} />
              <Route path='/Request' element={<Request/>}/>
              <Route path='/Workbench' element={<Workbench/>}/>
              <Route path='/UserCreate' element={<UserCreate/>}/>
              <Route path='/screen/:infoscreen' element={<FullDisplay onShow={setShow} fulldisplay={true}/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </main>
          <div className="footer">
            
          </div>
        </div>
      </Router>
  )
}
//{show && <Footer/>}