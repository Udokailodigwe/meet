import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './css/index.css';


import * as atatus from 'atatus-spa';
atatus.config('723f6a6983144581931bc74f469bf666').install();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//PWA
serviceWorkerRegistration.unregister();

// performance monitoring
reportWebVitals();


