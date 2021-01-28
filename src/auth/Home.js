import React from "react";
import firebase from '../firebase';
import { Navbar, Nav } from 'react-bootstrap';
import './Auth.css';
import '../App.css';
import '../components/Navbar.css';
import Footer from "../components/Footer";

// For Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

// Views 
import MaintenanceData from '../Views/MaintenanceData';
import InfoData from '../Views/InfoData';
import DiaryData from '../Views/DiaryData';
import NotesData from '../Notes/Notes';
import HomeAppGrid from '../Views/HomeAppGrid';

const Home = () => {
   return (
      <Router>
         <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
               {/* <Navbar.Brand href="#home">title</Navbar.Brand> */}
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav variant="pills" className="mr-auto">
                     <LinkContainer to="/home"><Nav.Link>Home</Nav.Link></LinkContainer>
                     <LinkContainer to="/timetracking"><Nav.Link>Time Tracking OFF</Nav.Link></LinkContainer>
                     <LinkContainer to="/bikediary"><Nav.Link>Bike Diary</Nav.Link></LinkContainer>
                     <LinkContainer to="/maintenance"><Nav.Link>Maintenance</Nav.Link></LinkContainer>
                     <LinkContainer to="/notes"><Nav.Link>Notes</Nav.Link></LinkContainer>
                     <LinkContainer to="/info"><Nav.Link>Info</Nav.Link></LinkContainer>
                  </Nav>
                  <Nav>
                     <LinkContainer to="/info"><Nav.Link onClick={() => firebase.auth().signOut()}>Log out</Nav.Link></LinkContainer>
                  </Nav>
               </Navbar.Collapse>
            </Navbar>

            {/* <nav className="app-navigation">
               <ul className="sub-navigation-links">
                  <li><Link className="sub-navigation-links" to="/">Home</Link></li>
                  <li><Link className="sub-navigation-links" to="/bikediary">Time Tracking</Link></li>
                  <li><Link className="sub-navigation-links" to="/bikediary">Bike Diary</Link></li>
                  <li><Link className="sub-navigation-links" to="/maintenance">Maintenance</Link></li>
                  <li><Link className="sub-navigation-links" to="/notes">Notes</Link></li>
                  <li><Link className="sub-navigation-links" to="/info">Info</Link></li>
                  <li><Link className="sub-navigation-links" onClick={() => firebase.auth().signOut()}>Log out</Link></li>
               </ul>
            </nav> */}
            {/* SWITCHER */}
            <Switch>
               {/* <Route exact path="/"><HomeContainer /></Route> */}
               <Route path="/home"><HomeContainer /></Route>
               <Route path="/bikediary"><BikeDiary /></Route>
               <Route path="/info"><Info /></Route>
               <Route path="/maintenance"><Maintenance /></Route>
               <Route path="/notes"><NotesData /></Route>
            </Switch>

            <div>
              
            {/* <nav className="app-navigation">
               <ul className="sub-navigation-links">
                  <li><Link className="#" to="/">Home</Link></li>
                  <li><Link className="#" to="/bikediary">Time Tracking</Link></li>
                  <li><Link className="#" to="/bikediary">Bike Diary</Link></li>
                  <li><Link className="#" to="/maintenance">Maintenance</Link></li>
                  <li><Link className="#" to="/notes">Notes</Link></li>
                  <li><Link className="#" to="/info">Info</Link></li>
                  <li><Link className="#" onClick={() => firebase.auth().signOut()}>Log out</Link></li>
               </ul>
            </nav> */}
            
            
            
            </div>
         </div>
      </Router>
   );
};

export default Home;

function HomeContainer() {
   return (
     <div>
       <div className="header">
         <h1 className="heading">Home1</h1>
         <div className="#">
           <HomeAppGrid />
           <Footer />
         </div>
       </div>
     </div>
   );
}

function BikeDiary() {
   return (
     <div>
       <div className="header">
         <h1 className="heading">BikeDiary</h1>
       </div>
       <div>
         <DiaryData />
         <Footer />
       </div>
     </div>
   );
}

function Info() {
   return (
     <div>
       <div className="header">
         <h1 className="heading">Bike Info</h1>
         <div className="#">
           <InfoData />
           <Footer />
         </div>
       </div>
     </div>
   );
}

function Maintenance() {
   return (
     <div>
       <div className="header">
         <h1 className="heading">Maintenance</h1>
         <div className="#">
           <MaintenanceData />
           <Footer />
         </div>
       </div>
     </div>
   );
}