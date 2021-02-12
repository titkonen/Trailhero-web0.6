import React from 'react';
import firebase from '../firebase';
import { Row, Col, Button, Toast } from 'react-bootstrap';
import '../App.css';

export const ReadSpots = ({ basicspot}) => {
   const [name, setName] = React.useState(basicspot.name); // Spot name 
   const [ridingTime, setRidingTime] = React.useState(basicspot.ridingTime); // Riding times per spot
   const [isLoaded, setIsLoaded] = React.useState(false);
   const [show, setShow] = React.useState(true);

   // Updates data identicating right id and add new updated values.
   const onUpdate = () => {
      setIsLoaded(true);
      setShow(true);
      const db = firebase.firestore()
      db.collection('spots').doc(basicspot.id).set({ ...basicspot, name, ridingTime })
   }

   // Deletes data with right id identification
   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('spots').doc(basicspot.id).delete()
   }

   const ShowToaster = () => {
      return (
        <Row>
          <Col xs={6}>
            <Toast className="toast-style" onClose={() => setShow(false)} show={show} delay={700} autohide>
              <Toast.Body>Updated</Toast.Body>
            </Toast>
          </Col>
        </Row>
      );
   }

   return (
      <div>
         <div className="table-container"> 
            <Row>
               <Col xs={6} sm={6} md={6}>
                  <input value={name} className="input" placeholder="Spot name" size="40"
                     onChange={(event) => { setName(event.target.value); }}
                  />
               </Col>
               <Col xs={1} sm={2} md={2}>
                  <input value={ridingTime} className="input-number" placeholder="Rides per spot" size="6"
                     onChange={(event) => { setRidingTime(event.target.value); }}
                  />
               </Col>     
               <Col xs={1} sm={2} md={2}>
                  <Button className="button-blue" variant="light" onClick={onUpdate}>UPDATE</Button>
               </Col>         
               <Col xs={1} sm={2} md={2}>
                  <Button className="button-red" variant="light" onClick={onDelete}>DELETE</Button>
               </Col>
               { isLoaded && <div> <ShowToaster /> </div> } 
            </Row>            
         </div>
      </div>
   )
}