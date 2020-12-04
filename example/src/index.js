import React from 'react';
import ReactDOM from 'react-dom';
import { SassyThemeProvider } from 'sassy-components';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <SassyThemeProvider>
    <App />
  </SassyThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
