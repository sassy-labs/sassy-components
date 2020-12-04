import React from 'react';
import { Alert } from 'sassy-components';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Alert icon="info-circle" duration={50000} isOpen variant="primary">
          This is an alert
        </Alert>
      </header>
    </div>
  );
}

export default App;
