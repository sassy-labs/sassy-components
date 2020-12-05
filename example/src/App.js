import React from 'react';
import { Alert } from './dist';
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
        <Alert duration={50000} isOpen variant="primary">
          <Alert.Icon name="check-circle" />
          <Alert.Message>This is an alert</Alert.Message>
        </Alert>
      </header>
    </div>
  );
}

export default App;
