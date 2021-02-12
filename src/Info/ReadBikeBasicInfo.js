import React from 'react';
import firebase from '../firebase';
import { Row, Col, Button, Toast } from 'react-bootstrap';
import '../App.css';
import './Info.css';

export const ReadBikeBasicInfo = ({ basicinfo }) => {
   const [serialnumber, setSerialnumber] = React.useState(basicinfo.serialnumber); // serialnumber 
   const [purchasedate, setPurchasedate] = React.useState(basicinfo.purchasedate); // purchasedate 
   const [purchaseplace, setPurchaseplace] = React.useState(basicinfo.purchaseplace); // purchaseplace 
   const [extramemo, setExtramemo] = React.useState(basicinfo.extramemo); // extramemo 
   const [model, setModel] = React.useState(basicinfo.model); // model 
   const [isLoaded, setIsLoaded] = React.useState(false);
   const [show, setShow] = React.useState(true);

   // Updates data identicating right id and add new updated values.
   const onUpdate = () => {
      setIsLoaded(true);
      setShow(true);
      const db = firebase.firestore()
      db.collection('bike-basic-info').doc(basicinfo.id).set({ ...basicinfo, serialnumber, purchasedate, purchaseplace, extramemo, model })
   }

   // Deletes data with identicating right id
   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('bike-basic-info').doc(basicinfo.id).delete()
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
               <h2 className="info-container-title">Bike basic information</h2>
            </Row>
            <Row>
               <Col xs={6} sm={6}>
                  <label className="labelname">Bike model</label><br></br>
                  <input
                     value={model}
                     className="input"
                     placeholder="Model"
                     size="28"
                     onChange={(event) => {
                        setModel(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={6}>
                  <label className="labelname">Serial number</label><br></br>
                  <input
                     value={serialnumber}
                     className="input"
                     placeholder="Serial number"
                     size="16"
                     onChange={(event) => {
                        setSerialnumber(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={6}>
                  <label className="labelname">Purchase Date</label><br></br>
                  <input
                     value={purchasedate}
                     className="input"
                     placeholder="Purchase Date"
                     size="10"
                     onChange={(event) => {
                        setPurchasedate(event.target.value);
                     }}
                  />
               </Col>
               <Col xs={6} sm={6}>
                  <label className="labelname">Purchase Place</label><br></br>
                  <input
                     value={purchaseplace}
                     className="input"
                     placeholder="Purchase Place"
                     size="20"
                     onChange={(event) => {
                        setPurchaseplace(event.target.value);
                     }}
                  />
               </Col>
            </Row>
            <Row>
              <Col xs={12} md={12}>
                <label className="labelname">Additional info</label><br></br>
                  <textarea 
                    name="info" 
                    rows="5" 
                    cols="53"
                    className="textarea-style"
                    value={extramemo}
                    placeholder="Additional info"
                    onChange={(event) => setExtramemo(event.target.value)}
                  ></textarea>
              </Col>
            </Row>
            <Button className="button-blue" variant="light" onClick={onUpdate}>UPDATE</Button>
            <Button className="button-red" variant="light" onClick={onDelete}>DELETE</Button>
            { isLoaded && <div> <ShowToaster /> </div> }
         </div>
      </div>
   )
}