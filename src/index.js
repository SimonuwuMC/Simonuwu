import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PojavApp from './PojavApp';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Check if we're on the pojav.html page - handle both local and deployed paths
const isPojavPage = window.location.pathname.includes('pojav.html') || window.location.pathname === '/pojav';

root.render(
  <React.StrictMode>
    {isPojavPage ? <PojavApp /> : <App />}
  </React.StrictMode>
);