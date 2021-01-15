import React from 'react';
import firebase from '../firebase';

export const DataInput = ({ bikedata }) => {
   const [date, setDate] = React.useState(bikedata.date); // Date 
   const [km, setKm] = React.useState(bikedata.km); // Km
   const [time, setTime] = React.useState(bikedata.time); // Time
   const [route, setRoute] = React.useState(bikedata.route); // Route
   const [bikemodel, setBikemodel] = React.useState(bikedata.bikemodel); // Bikemodel

   // console.log(route);

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
      <div>
         <input 
            value={date}
            className="input"
            placeholder= "Date"
            size="10"  
            onChange={(event) => {
               setDate(event.target.value);
            }} 
         />
         <input 
            value={km} 
            className="input"
            placeholder= "Length (km)"
            size="7" 
            onChange={(event) => {
               setKm(event.target.value);
            }} 
         />
         <input 
            value={time}
            className="input"
            placeholder= "Time"
            size="8" 
            onChange={(event) => {
               setTime(event.target.value);
            }} 
         />
         <input 
            value={route}
            className="input"
            placeholder= "Route"
            size="20" 
            onChange={(event) => {
               setRoute(event.target.value);
            }} 
         />
         <input 
            value={bikemodel}
            className="input"
            placeholder= "Bike model"
            size="20" 
            onChange={(event) => {
               setBikemodel(event.target.value);
            }} 
         />

         <button className="button-update" onClick={onUpdate}>Update</button>
         <button className="button-delete" onClick={onDelete}>Delete</button>
      </div>  
   )
}