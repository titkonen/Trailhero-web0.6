import React from 'react';

// For Routing
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Views 
// import MaintenanceData from './MaintenanceData';
// import InfoData from './InfoData';
// import DiaryData from './DiaryData';
// import NotesData from '../Notes/Notes';
// import HomeAppGrid from '../Views/HomeAppGrid';

function HomeAppGrid() {

   return (
      <div>
         <h1 className="module-title">Summary of data</h1>
         <h4>Dashboard summary of all content</h4>
         <h3>User profile</h3>
         <h4>Riding so far this year</h4> 
         <h4>Card list: My bikes</h4>
         
      </div>
   );
}

export default HomeAppGrid;