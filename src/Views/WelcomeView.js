import React from 'react';
import hero from '../assets/hero-web.jpg';
import Footer from '../components/Footer';
import { Row, Col } from 'react-bootstrap';
import timetracking from '../assets/Icon-time-tracking.png';
import bikediary from '../assets/Icon-bike-diary.png';
import infomaintenance from '../assets/Icon-info-maintenance.png';
import spotstrails from '../assets/Icon-spots-trails.png';

function WelcomeView() {

   return (
      <div>
         <img src={hero} className="hero-img" alt="Hero" />
        
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
            <div className="bottom-spacer"></div>
            <Footer />
      </div>
   );
}

export default WelcomeView;