import React, { useCallback, useContext } from "react";
import WelcomeView from "../Views/WelcomeView";
import { withRouter, Redirect } from "react-router";
// import app from "./base.js";
import { AuthContext } from "./Auth.js";
import './Auth.css';
import '../App.css';
import firebase from '../firebase';
import { Button } from 'react-bootstrap';

const Login = ({ history }) => {
   const handleLogin = useCallback(
      async event => {
         event.preventDefault();
         const { email, password } = event.target.elements;
      try {
         await firebase
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
         history.push("/");   
      }  catch (error) {
         alert (error);
      }
   }, 
      [history]
   );

   const { currentUser } = useContext(AuthContext);

   if (currentUser) {
      return <Redirect to="/" />;
   }

   return (
      <div>
         <div className="hero-login">
            <div className="login-container">
               <form onSubmit={handleLogin}>
                  <h2 className="login-form-title">Log in</h2>
                  <input className="input-login" name="email" type="email" placeholder="Email" />
                  <input className="input-login" name="password" type="password" placeholder="Password" />             
                  <Button className="button-custom" type="submit" variant="primary">Log in</Button>
               </form>
            </div>
            <div>
               <h1 className="heading-welcome">Welcome to TrailHero</h1>
               <h2 className="login-subheading">Bike data and maintenance application</h2>
            </div>
         </div>
         <WelcomeView />
      </div>
   );
};

export default withRouter(Login);