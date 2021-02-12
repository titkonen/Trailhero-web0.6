import React from 'react';
import firebase from '../firebase';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import { ReadSpots } from './ReadSpots';

function Spots() {
  const [spots, setSpots] = React.useState([]);
  const [newSpot, setNewSpot] = React.useState();
  const [ridingTime, setRidingTime] = React.useState();  

  //Modal Const's
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // spot info 
  React.useEffect(() => {
   const db = firebase.firestore();
   return db.collection('spots').onSnapshot((snapshot) => {
     const spottitieto = [];
     snapshot.forEach(doc => spottitieto.push({ ...doc.data(), id: doc.id }));
     setSpots(spottitieto);
   });
 }, []);

 const saveAll = () => {
   const db = firebase.firestore();
   db.collection('spots').add({
     name: newSpot,
     ridingTime: ridingTime
   });
   handleClose();
   setNewSpot('');
   setRidingTime('');
 }

  return (
    <div>
      <div className="primary-button-styling">
        <Button variant="primary" onClick={handleShow}>
          Add spot
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Spot information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          
          <Container className="#">
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Spot/route name</label><br></br>
                <input
                  value={newSpot}
                  className="input"
                  required
                  placeholder="Spot name"
                  size="20"
                  onChange={(event) => setNewSpot(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Riding time</label><br></br>
                <input
                  value={ridingTime}
                  className="input"
                  required
                  placeholder="Riding time"
                  size="20"
                  onChange={(event) => setRidingTime(event.target.value)}
                />
              </Col>
            </Row>
          </Container>
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveAll}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="#">
        <div className="read-list-info">

          {spots.map(basicspot => (
            <div key={basicspot.name}>
              <ReadSpots basicspot={basicspot} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default Spots;