import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PojavApp from './PojavApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check if we're on the pojav.html page
const isPojavPage = window.location.pathname === '/pojav.html';

root.render(
  <React.StrictMode>
    {isPojavPage ? <PojavApp /> : <App />}
  </React.StrictMode>
);