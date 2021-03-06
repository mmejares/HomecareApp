import React from 'react';
import logo from './logo.svg';
import {
  Route
} from 'react-router-dom';
import HomePage from './HomePage';
import Login from './account/Login';
import Register from './account/Register';
import AccountActivation from './account/AccountActivation'
import ResendActivationLink from './account/ResendActivationLink';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


function App() {
  return (
    <div className="app">
      <header className="app-header">
       This is the Header component
      </header>

      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/account/activate" component={AccountActivation}/>
      <Route exact path="/account/resend-activation-link" component={ResendActivationLink}/>

    </div>
  );
}

export default App;
