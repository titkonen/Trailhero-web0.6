import React, { useCallback } from "react";
// Graphic assets
import timetracking from '../assets/Icon-time-tracking.png';
import bikediary from '../assets/Icon-bike-diary.png';
import infomaintenance from '../assets/Icon-info-maintenance.png';
import spotstrails from '../assets/Icon-spots-trails.png';

import hero from '../assets/hero-web.jpg';
import { withRouter } from "react-router";
// import app from "./base.js";
import firebase from '../firebase';
import './Auth.css';
import '../App.css';
import { Button, Row, Col } from 'react-bootstrap';

const SignUp = ({ history }) => {
   const handleSignUp = useCallback(async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
         await firebase
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
         history.push("/");   
      }  catch (error) {
         alert (error);
      }
   }, [history]);

   return (
      <div>
         <div className="hero-login">
            <div className="login-container">
               <form onSubmit={handleSignUp}>
                  <h2 className="login-form-title">Sign up</h2>
                  <input className="input-login" name="email" type="email" placeholder="Email" />
                  <input className="input-login" name="password" type="password" placeholder="Password" />             
                  <Button className="button-custom" type="submit" variant="primary">Sign up</Button>
               </form>
            </div>
               <h1 className="heading-welcome">Welcome to TrailHero</h1>
               <h2 className="login-subheading">Bike data and maintenance application</h2>
         </div>

         <img
            src={hero}
            className="hero-img"
            alt="Hero"
         />

         <div className="module-container">
            <h1 className="module-title">What is TrailHero?</h1>
            <p className="module-ingress">TrailHero is bicycle data gathering and maintenance application. 
            Mark down easily your bicycle related data and keep update your bicycle maintenance schedules and task lists.</p>
         </div>

         <h1 className="module-title">Features</h1>
            <Row>
               <Col> 
                  <div className="feature-icons">
                     <img src={timetracking} alt="Time-Tracking Icon" className="feature-icon" />
                     <h4 className="feature-icon-text">Time Tracking</h4>
                  </div>
               </Col>

               <Col> 
                  <div className="feature-icons">
                     <img src={bikediary} alt="Bike Diary Icon" className="feature-icon" />
                     <h4 className="feature-icon-text">Bike Diary</h4>
                  </div>
               </Col>
               <Col> 
                  <div className="feature-icons">
                     <img src={infomaintenance} alt="Info-Maintenance Icon" className="feature-icon" />
                     <h4 className="feature-icon-text">Bike Info and maintenance</h4>
                  </div>
               </Col>
               <Col>
                  <div className="feature-icons">
                     <img src={spotstrails} alt="Spots-Trails Icon" className="feature-icon" />
                     <h4 className="feature-icon-text">Spots and Trails</h4>
                  </div>
               </Col>
            </Row>


      </div>
   );
};

export default withRouter(SignUp);