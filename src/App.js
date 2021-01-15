import React from 'react';
import './App.css';
// import firebase from './firebase';
// Graphic assets
import Trailherologo from './assets/Trailhero-logo-horizontal.png';

// For Auth imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./auth/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from './auth/Auth';
import PrivateRoute from "./auth/PrivateRoute";

// Views 
import WelcomeView from './Views/WelcomeView';
import AboutView from './Views/AboutView';
import ContactsView from './Views/ContactsView';
import TestingView from './Views/TestingView';

function App() {

  return (
    <AuthProvider>
    <Router>
      <div>
        <nav className="blue">          
          <img src={Trailherologo} className="logo-trailhero" alt="Hero" />

          <ul className="navigation">
            <li>
              <Link
                className="navigation"
                to="/login">Login
              </Link>
            </li>
            <li>
              <Link
                className="navigation"
                to="/signup">Sign up
              </Link>
            </li>
            {/* <li>
              <Link
                className="navigation"
                to="/about">Privacy Policy
              </Link>
            </li> */}
            <li>
              <Link
                className="navigation"
                to="/contacts">Contacts
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/testing">
            <Testing />
          </Route>
        </Switch>

        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
        </div>

      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;

function Welcome() {
  return (
    <div>
      <div className="header">
      <h1 className="heading">Welcome</h1>
      </div>
      <div>
        <WelcomeView />
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">Privacy Policy</h1>
        <div className="lightgrey">
          <AboutView />
        </div>
      </div>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">Contacts</h1>
        <div className="lightgrey">
          <ContactsView />
        </div>
      </div>
    </div>
  );
}

function Testing() {
  return (
    <div>
      <div className="header">
        <h1 className="heading">TestingView</h1>
        <div className="lightgrey">
          <TestingView />
        </div>
      </div>
    </div>
  );
}