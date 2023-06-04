import React from 'react';
import ReactDOM from 'react-dom/client';

import HeaderContext from './context/HeaderContext';
import App from './App';

import './index.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderContext>
      <App />
    </HeaderContext>
  </React.StrictMode>
)

