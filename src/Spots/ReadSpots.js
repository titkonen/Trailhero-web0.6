import React from 'react';
import firebase from '../firebase';
import { Row, Col, Button } from 'react-bootstrap';

export const ReadSpots = ({ basicspot}) => {
   const [name, setName] = React.useState(basicspot.name); // Spot name 
   const [ridingTime, setRidingTime] = React.useState(basicspot.ridingTime); // Riding times per spot

   // Updates data identicating right id and add new updated values.
   const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('spots').doc(basicspot.id).set({ ...basicspot, name, ridingTime })
   }

   // Deletes data with right id identification
   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('spots').doc(basicspot.id).delete()
   }

   return (
      <div>
         <div className="tablelist-bg"> 
            <Row>
               <Col xs={6} sm={6} md={6}>
                  {/* <label className="labelname">Spot name</label><br></br> */}
                  <input
                     value={name}
                     className="input"
                     placeholder="Spot name"
                     size="40"
                     onChange={(event) => {
                        setName(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={1} sm={2} md={2}>
                  <input
                     value={ridingTime}
                     className="input-number"
                     placeholder="Rides per spot"
                     size="6"
                     onChange={(event) => {
                        setRidingTime(event.target.value);
                     }}
                  />
               </Col>     
               <Col xs={1} sm={2} md={2}>
                  <Button className="button-blue" variant="light" onClick={onUpdate}>UPDATE</Button>
               </Col>         
               <Col xs={1} sm={2} md={2}>
                  <Button className="button-red" variant="light" onClick={onDelete}>DELETE</Button>
               </Col>
               
                   
            </Row>
            {/* <div className="secondary-button-position">
               <button className="button-update" onClick={onUpdate}>UPDATE</button>
               <button className="button-delete" onClick={onDelete}>DELETE</button>
            </div> */}
            
         </div>
      </div>
   )
}