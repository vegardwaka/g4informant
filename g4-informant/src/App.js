import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Login from './components/Login';
import About from './components/About';
import Foresporsel from './components/Foresporsel';

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='About' element={<About/>}/>
            <Route path='Blog' element={<Blog/>}/>
            <Route path='Login' element={<Login/>}/>
            <Route path='Foresporsel' element={<Foresporsel/>}/>
          </Routes>
        </div>
        <div className="footer">
          <Footer/>
        </div>
      </div>
    </Router>
  );
}
