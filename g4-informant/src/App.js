import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Login from './components/Login';
import About from './components/About';
import Request from './components/Request';
import Workbench from './components/Workbench';
import UserCreate from './components/UserCreate';
import NotFound from './components/NotFound';
import useToken from './components/useToken';
import Profile from './components/Profile';
import FullDisplay from './components/FullDisplay';
import Documentation from './components/Documentation';

export default function App(props) {
  const [show, setShow] = useState(true);
  const [showFooter, setShowFooter] = useState(true);
  const { token, setToken } = useToken();

/* checks if user is logged in before choosing which routes are available in the navbar and through direct links */
  if (!localStorage.getItem('token')) {
    return (
      <>
        <Router>
          <div className="App">
            {show && <NavBar />}
            <main className="content">
              <Routes>
                <Route path="/" element={<Home foot={setShowFooter}/>} />
                <Route path="/About" element={<About foot={setShowFooter}/>} />
                <Route path="/Documentation" element={<Documentation foot={setShowFooter} />} />
                <Route path="/Blog" element={<Blog onShow={setShow} />} />
                <Route path="/Login" element={<Login setToken={setToken} foot={setShowFooter}/>} />
                <Route path="/screen/:infoscreen" element={<FullDisplay onShow={setShow} fulldisplay={true} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            {show && <div className="footer"><Footer /></div>}
          </div>
        </Router>
      </>
    );
  }


  return (
    <>
      <Router>
        <div className="App">
          {show && <NavBar />}
          <main className="content">
            <Routes>
              <Route path="/" element={<Home foot={setShowFooter}/>} />
              <Route path="/About" element={<About foot={setShowFooter}/>} />
              <Route path="/Documentation" element={show && <Documentation foot={setShowFooter}/>} />
              <Route path="/Blog" element={<Blog onShow={setShow}  foot={setShowFooter}/>} />
              <Route exact path="/Profile" element={<Profile foot={setShowFooter}/>} />
              <Route path="/Login" element={<Login setToken={setToken} />} />
              <Route path="/Request" element={<Request foot={setShowFooter}/>} />
              <Route path="/Workbench" element={<Workbench foot={setShowFooter}/>} />
              <Route path="/UserCreate" element={<UserCreate foot={setShowFooter}/>} />
              <Route path="/screen/:infoscreen" element={<FullDisplay onShow={setShow} fulldisplay={true} />} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </main>
          {showFooter && show && <div className="footer"><Footer /></div>}
        </div>
      </Router>
    </>
  );
}