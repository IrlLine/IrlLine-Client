import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import LoginPage from './Pages/LoginPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
