import React from 'react';
import firebase from '../firebase';
import './ReadBikeDiary.css';
import { Container } from 'react-bootstrap';


export const ReadBikeDiary = ({ bikedata }) => {
   const [date, setDate] = React.useState(bikedata.date); // Date 
   const [km, setKm] = React.useState(bikedata.km); // Km
   const [time, setTime] = React.useState(bikedata.time); // Time
   const [route, setRoute] = React.useState(bikedata.route); // Route
   const [bikemodel, setBikemodel] = React.useState(bikedata.bikemodel); // Bikemodel

   // Updates data identicating right id and add new updated values.
   const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('bike-data-diary').doc(bikedata.id).set({ ...bikedata, date, km, time, route, bikemodel })
   }

   // Deletes data with identicating right id
   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('bike-data-diary').doc(bikedata.id).delete()
   }

   return (
      
      <div className="bikediary-input-wrapper">
         {/* <Container className="input-wrapper"> */}
            <input value={date} className="bikediary-input" placeholder= "Date" size="10"  
               onChange={(event) => { setDate(event.target.value); }} 
            />
            <input value={km} className="bikediary-input" placeholder= "Length (km)" size="7" 
               onChange={(event) => { setKm(event.target.value); }} 
            />
            <input value={time} className="bikediary-input" placeholder= "Time" size="8" 
               onChange={(event) => { setTime(event.target.value); }} 
            />
            <input value={route} className="bikediary-input" placeholder= "Route" size="20" 
               onChange={(event) => { setRoute(event.target.value); }} 
            />
            <input value={bikemodel} className="bikediary-input" placeholder= "Bike model" size="20" 
               onChange={(event) => { setBikemodel(event.target.value); }} 
            />
            <button className="bikediary-button-update" onClick={onUpdate}>Update</button>
            <button className="bikediary-button-delete" onClick={onDelete}>Delete</button>
         {/* </Container> */}
      </div>  
      
   )
}