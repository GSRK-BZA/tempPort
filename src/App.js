import React from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Typewriter from './components/Typewriter.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <Typewriter heading={['Windows >> Apple','Linux >> Windows','Apple >> Linux']} />    
      </div>  
  );
}

export default App;
