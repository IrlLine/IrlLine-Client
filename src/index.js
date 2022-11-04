import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from "react-router-dom";
import './Styles/index.css';
import LoginPage from './Pages/LoginPage';

function LoginPageWrapper(){
  return <LoginPage />
}

function render(){
  ReactDOM.render(
  <BrowserRouter>
      <Route exact path="/" component={LoginPageWrapper} />
  </BrowserRouter>, 
  document.getElementById('root'));
}
render();
