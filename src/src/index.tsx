import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/vendor/fontawesome-free/css/all.min.css'
import './assets/scss/sb-admin-theme.scss';
import App from './App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);