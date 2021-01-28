import React, { useState, useCallback, useContext } from "react";
import WelcomeView from "../Views/WelcomeView";
import { withRouter, Redirect } from "react-router";
// import app from "./base.js";
import { AuthContext } from "./Auth.js";
import './Auth.css';
import '../App.css';
import firebase from '../firebase';
import { Jumbotron, Container, Row, Col, Button, Tabs, Tab } from 'react-bootstrap';

const Login = ({ history }) => {
   const [key, setKey] = useState('home');
   
   const handleLogin = useCallback(async event => {
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
   }, [history]);

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

   const { currentUser } = useContext(AuthContext);

   if (currentUser) {
      return <Redirect to="/" />;
   }

   return (
      <div>
         <Jumbotron fluid>
            <Container>
               <Row>
                  <Col>
                     <h1 className="heading-welcome">Welcome to TrailHero</h1>
                     <h2 className="login-subheading">
                        Bike data and maintenance application
                     </h2>
                  </Col>
                  <Col>
                     <div className="login-form">
                        <Tabs
                           id="controlled-tab-example"
                           activeKey={key}
                           onSelect={(k) => setKey(k)}
                        >
                           <Tab eventKey="home" title="Log in">
                              <form onSubmit={handleLogin}>
                                 <h2 className="login-form-title">Log in</h2>
                                 <input className="input-login" name="email" type="email" placeholder="Email" />
                                 <input className="input-login" name="password" type="password" placeholder="Password" />             
                                 <Button className="button-custom" type="submit" variant="primary">Log in</Button>
                              </form>
                           </Tab>
                           <Tab eventKey="profile" title="Sign up">
                              <form onSubmit={handleSignUp}>
                                 <h2 className="login-form-title">Sign up</h2>
                                 <input className="input-login" name="email" type="email" placeholder="Email" />
                                 <input className="input-login" name="password" type="password" placeholder="Password" />             
                                 <Button className="button-custom" type="submit" variant="primary">Sign up</Button>
                              </form>
                           </Tab>
                        </Tabs>
                     </div>
                  </Col>
               </Row>
              
            </Container>
         </Jumbotron>

         <WelcomeView />
      </div>
   );
};

export default withRouter(Login);