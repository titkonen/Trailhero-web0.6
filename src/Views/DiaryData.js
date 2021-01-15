import React from 'react';
import firebase from '../firebase';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

import { DataInput } from '../components/DataInput';
// import ShowLoader from '../components/ShowLoader';
import '../components/DataInput.css';
import '../App.css';
import './DiaryData.css';

function DiaryData() {
   const [bikedatas, setBikedatas] = React.useState([])
   const [newBikeDate, setNewBikeDate] = React.useState()
   const [newBikeKM, setNewBikeKM] = React.useState()
   const [newBikeTime, setNewBikeTime] = React.useState()
   const [newBikeRoute, setNewBikeRoute] = React.useState()
   const [newBikeModel, setNewBikeModel] = React.useState()

   //Modal Const's
   const [show, setShow] = React.useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   // Getting Data from Firebase
   //1: .orderBy() ADDED (This will order data by date order. You can change other attributes for it.)
   React.useEffect(() => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('date').onSnapshot((snapshot) => {
         const bikeInfo = [];
         snapshot.forEach(doc => bikeInfo.push({ ...doc.data(), id: doc.id }));
         setBikedatas(bikeInfo);
      });
   }, []);

   const onCreate = () => {
      const db = firebase.firestore();
      db.collection('bike-data-diary').add({
         date: newBikeDate,
         km: newBikeKM,
         time: newBikeTime,
         route: newBikeRoute,
         bikemodel: newBikeModel
      });
      handleClose();
   };


   return (
      <div>
      <div className="mt-40 ml-40">
        <Button variant="primary" onClick={handleShow}>
          Add bike usage data
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bike usage data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          
          <Container className="container-style">
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Date</label><br></br>
                <input
                  value={newBikeDate}
                  className="input"
                  required
                  placeholder="2020-08-01"
                  size="20"
                  onChange={(event) => setNewBikeDate(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Km</label><br></br>
                <input
                  value={newBikeKM}
                  className="input"
                  required
                  placeholder="Km"
                  size="20"
                  onChange={(event) => setNewBikeKM(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Time</label><br></br>
                <input
                  value={newBikeTime}
                  className="input"
                  required
                  placeholder="Time"
                  size="20"
                  onChange={(event) => setNewBikeTime(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Route</label><br></br>
                <input
                  value={newBikeRoute}
                  className="input"
                  required
                  placeholder="Route"
                  size="20"
                  onChange={(event) => setNewBikeRoute(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
               <Col xs={12} md={6}>
                  <label className="labelname">Bike Model</label><br></br>
                  <input
                     value={newBikeModel}
                     className="input"
                     required
                     placeholder="Bike Model"
                     size="20"
                     onChange={(event) => setNewBikeModel(event.target.value)}
                  />
               </Col>
            </Row>
          </Container>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onCreate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

         <ul>
            {/* <h2 className="subheading">Add bike data</h2>
            <input
               value={newBikeDate}
               className="input"
               required
               placeholder="Date"
               size="10"
               onChange={(event) => setNewBikeDate(event.target.value)}
            />
            <input
               value={newBikeKM}
               className="input"
               required
               placeholder="Length"
               size="7"
               onChange={(event) => setNewBikeKM(event.target.value)}
            />
            <input
               value={newBikeTime}
               className="input"
               required
               placeholder="Time"
               size="8"
               onChange={(event) => setNewBikeTime(event.target.value)}
            />
            <input
               value={newBikeRoute}
               className="input"
               required
               placeholder="Route"
               size="20"
               onChange={(event) => setNewBikeRoute(event.target.value)}
            />
            <input
               value={newBikeModel}
               className="input"
               required
               placeholder="Bike model"
               size="20"
               onChange={(event) => setNewBikeModel(event.target.value)}
            />
            <button
               onClick={onCreate}
               className="button"
              
            >Save</button> */}

        

            <h2 className="subheading">Bike data</h2>
           
            {bikedatas.map(bikedata => (
               <li
                  key={bikedata.date}
                  className="listmarker"
               >
                  {/* {bikedata.date} */}
                  <DataInput bikedata={bikedata} />
               </li>
            ))}
         </ul>

      </div>
   );
}

export default DiaryData;