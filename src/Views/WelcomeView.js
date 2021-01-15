import React from 'react';
import hero from '../assets/hero-web.jpg';

function WelcomeView() {

   return (
      <div>
         <h1 className="heading-welcome">Welcome</h1>
         <h2 className="subheading-center">Bike data and maintenance application</h2>
         <p className="content-about">TrailHero is bicycle data gathering and maintenance application. You can mark down easily your bicycle related data and keep update your bicycle maintenance schedules and task lists.</p>
         <img
            src={hero}
            className="hero"
            alt="Hero"
         />
      </div>
   );
}

export default WelcomeView;