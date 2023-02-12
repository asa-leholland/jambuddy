import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import axios from 'axios';

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const root = createRoot( document.getElementById('root'));

window.React1 = require('react');

root.render(
  <React.StrictMode>
    <BrowserRouter {... window.__REACT_DEVTOOLS_GLOBAL_HOOK__}>
      <App />
    </BrowserRouter>

  </React.StrictMode>
)

