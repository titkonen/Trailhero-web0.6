import React from 'react';
import './App.css';
// import Footer from "./components/Footer";
// Graphic assets
import Trailherologo from './assets/Trailhero-logo-horizontal.png';

// For Auth imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./auth/Home";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { AuthProvider } from './auth/Auth';
import PrivateRoute from "./auth/PrivateRoute";

// Views 
// import WelcomeView from './Views/WelcomeView';
// import ContactsView from './Views/ContactsView';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div>
        <nav className="blue">          
          <img src={Trailherologo} className="logo-trailhero" alt="Hero" />
          {/* <ul className="navigation">
            <li><Link className="navigation" to="/login">Login</Link></li>
            <li><Link className="navigation" to="/signup">Sign up</Link></li>
            <li><Link className="navigation" to="/contacts">Contacts</Link></li>
          </ul> */}
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route> */}
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

// function Welcome() {
//   return (
//     <div>
//       <div className="header">
//       <h1 className="heading">Welcome</h1>
//       </div>
//       <div>
//         <WelcomeView />
//         {/* <Footer /> */}
//       </div>
//     </div>
//   );
// }

// function Contacts() {
//   return (
//     <div>
//       <div className="header">
//         <h1 className="heading">Contacts</h1>
//         <div className="lightgrey">
//           <ContactsView />
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }