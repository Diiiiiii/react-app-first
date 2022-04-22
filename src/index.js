import "the-new-css-reset/css/reset.css";
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider} from "./contexts/AppContext";
import { idHelpers } from './library/helpers';
import { BrowserRouter } from 'react-router-dom';
/* document.querySelectorAll("[data-counter-app]").forEach((element => {
  ReactDOM.render(
  <React.StrictMode>
    <App  /> 
  </React.StrictMode>,
  element,
  );
}); */

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppProvider value={{ id: idHelpers.generateId() }}>
    <App />
    </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();