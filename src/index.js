import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const toDate = new Date().toLocaleDateString();
const nowTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
  <React.StrictMode>
    <App />
    
    <div className = 'date-app'>Today is {toDate}</div>
    <div className = 'time-app'>Now is {nowTime}</div>
    
  </React.StrictMode>

  </>,
  document.getElementById('root')
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
