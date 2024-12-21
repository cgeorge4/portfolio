import Navbar from './components/Navbar';
import './styles.css'; // Adjust the path to your CSS file
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        {/* Add other components or content */}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
