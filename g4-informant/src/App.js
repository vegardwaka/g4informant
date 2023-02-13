import NavBar from './NavBar';
import { Home, Footer } from './Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <Home/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
