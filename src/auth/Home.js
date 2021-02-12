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
import MaintenanceData from '../Maintenance/MaintenanceData';
import InfoData from '../Info/InfoData';
import DiaryData from '../Diary/DiaryData';
import NotesData from '../Notes/Notes';
import HomeAppGrid from '../Views/HomeAppGrid';
import Spots from '../Spots/Spots';

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
                     <LinkContainer to="/spots"><Nav.Link>Spots</Nav.Link></LinkContainer>
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

            {/* SWITCHER */}
            <Switch>
               {/* <Route exact path="/"><HomeContainer /></Route> */}
               <Route path="/home"><HomeContainer /></Route>
               <Route path="/spots"><SpotsContainer /></Route>
               <Route path="/bikediary"><BikeDiary /></Route>
               <Route path="/info"><Info /></Route>
               <Route path="/maintenance"><Maintenance /></Route>
               <Route path="/notes"><NotesData /></Route>
            </Switch>

         </div>
      </Router>
   );
};

export default Home;

function HomeContainer() {
   return (
      <div>
         <div className="header">
            <h1 className="heading">Home</h1>
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
            {/* <Footer /> */}
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
               {/* <Footer /> */}
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
               {/* <Footer /> */}
            </div>
         </div>
      </div>
   );
}

function SpotsContainer() {
   return (
      <div>
         <div className="header">
            <h1 className="heading">Spots</h1>
            <div className="#">
               <Spots />
               {/* <Footer /> */}
            </div>
         </div>
      </div>
   );
}