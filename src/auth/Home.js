import React from "react";
import firebase from '../firebase';
// import { Button } from 'react-bootstrap';
import './Auth.css';
import '../App.css';

// For Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
         <nav className="app-navigation">
            <ul className="sub-navigation-links">
               <li>
                  <Link
                     className="sub-navigation-links"
                     to="/">Home
                  </Link>
               </li>
               <li>
                  <Link
                     className="sub-navigation-links"
                     to="/bikediary">Time Tracking
                  </Link>
               </li>
               <li>
                  <Link
                     className="sub-navigation-links"
                     to="/bikediary">Bike Diary
                  </Link>
               </li>
               <li>
                  <Link
                     className="sub-navigation-links"
                     to="/maintenance">Maintenance
                  </Link>
               </li>
               <li>
                  <Link
                     className="sub-navigation-links"
                     to="/notes">Notes
                  </Link>
               </li>
               <li>
                  <Link
                     className="sub-navigation-links"
                     to="/info">Info
                  </Link>
               </li>
               <li>
                  <Link
                     className="sub-navigation-links"
                     onClick={() => firebase.auth().signOut()}
                     // to="/contacts"
                     >Log out
                  </Link>
               </li>
            </ul>
         </nav>
         {/* SWITCHER */}
         <Switch>
            <Route exact path="/">
               <HomeContainer />
            </Route>
            <Route exact path="/bikediary">
               <BikeDiary />
            </Route>
            <Route path="/info">
               <Info />
            </Route>
            <Route path="/maintenance">
               <Maintenance />
            </Route>
            <Route path="/notes">
               <NotesData />
            </Route>
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
         </div>
       </div>
     </div>
   );
}