import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles.css';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blender from './pages/Blender';
import Unity from './pages/Unity';
import TAP from './pages/TAP';
import Certs from './pages/Certs';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blender" element={<Blender />} />
          <Route path="/Unity" element={<Unity />} />
          <Route path="/TAP" element={<TAP />} />
          <Route path="/Certs" element={<Certs />} />
        </Routes>
      </div>
    </Router>
    /*<div className="App">
      <div>
        <Navbar />
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
    </div>*/
  );
}

export default App;
