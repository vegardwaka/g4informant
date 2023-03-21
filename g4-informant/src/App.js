import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Login from './components/Login';
import About from './components/About';
import Request from './components/Request';
import Workbench from './components/Workbench'
import NotFound from './components/NotFound'
import useToken from './components/useToken';

export default function App() {
  const { token, setToken } = useToken();

  return (
      <Router>
        <div className="App"> 
          <NavBar/>
          <div className="content">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/About' element={<About/>}/>
              <Route path='/Blog' element={<Blog/>}/>
              <Route path='/Login' element={<Login setToken={setToken} />} />
              <Route path='/Foresporsel' element={<Request/>}/>
              <Route path='/Workbench' element={<Workbench/>}/>
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