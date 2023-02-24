import NavBar from './NavBar';
import { Home, Footer } from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Blogg from './Blogg';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blogg" element={<Blogg/>}/>
        </Routes>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
    </Router>
  );
}

export default App;
