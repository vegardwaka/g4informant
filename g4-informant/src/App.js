import NavBar from './NavBar';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
