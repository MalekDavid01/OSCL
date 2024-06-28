import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Custom global styles (if any)
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
