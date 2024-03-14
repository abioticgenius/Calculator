import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 className="centered">React Calculator</h1>
      </header>
      <Calculator />
    </div>
  );
}

export default App;
