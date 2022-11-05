import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './Styles/index.css';
import LoginPage from './Pages/LoginPage';
import Dashboard from './Pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<LoginPage />} />
      <Route exact path="/testi" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
);
