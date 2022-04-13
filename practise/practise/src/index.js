import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

document.querySelectorAll("[data-counter-app]").forEach(element => {
  let increment = 10;

  if (element.dataset.counterIncrement) {
    increment = parseFloat(element.dataset.counterIncrement);
  }
  ReactDOM.render(
  <React.StrictMode>
    <App increment={increment} />
  </React.StrictMode>,
  element,
  
);

  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
