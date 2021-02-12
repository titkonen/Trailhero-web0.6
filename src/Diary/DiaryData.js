import React from 'react';
import firebase from '../firebase';
import { Button, ButtonGroup, Dropdown, DropdownButton, Modal, Container, Row, Col } from 'react-bootstrap';
import { ReadBikeDiary } from './ReadBikeDiary';
import './ReadBikeDiary.css';
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

  // Sorting date in ASC order
  const sortByAsc = () => {
    const db = firebase.firestore();
    return db.collection('bike-data-diary').orderBy('date',"asc").onSnapshot((snapshot) => {
      const bikeInfo = [];
      snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
      setBikedatas(bikeInfo);
    });
  };

  // Sorting date in DESC order
  const sortByDesc = () => {
    const db = firebase.firestore();
    return db.collection('bike-data-diary').orderBy('date',"desc").onSnapshot((snapshot) => {
      const bikeInfo = [];
      snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
      setBikedatas(bikeInfo);
    });
  };

    // Sorting km in ASC order
    const sortKMAsc = () => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('km',"asc").onSnapshot((snapshot) => {
        const bikeInfo = [];
        snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
        setBikedatas(bikeInfo);
      });
    };
  
    // Sorting km in DESC order
    const sortKMDesc = () => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('km',"desc").onSnapshot((snapshot) => {
        const bikeInfo = [];
        snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
        setBikedatas(bikeInfo);
      });
    };

    // Sorting time in ASC order
    const sortTimeAsc = () => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('time',"asc").onSnapshot((snapshot) => {
        const bikeInfo = [];
        snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
        setBikedatas(bikeInfo);
      });
    };
  
    // Sorting time in DESC order
    const sortTimeDesc = () => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('time',"desc").onSnapshot((snapshot) => {
        const bikeInfo = [];
        snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
        setBikedatas(bikeInfo);
      });
    };

    // Sorting route in ASC order
    const sortRouteAsc = () => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('route',"asc").onSnapshot((snapshot) => {
        const bikeInfo = [];
        snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
        setBikedatas(bikeInfo);
      });
    };
  
    // Sorting route in DESC order
    const sortRouteDesc = () => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('route',"desc").onSnapshot((snapshot) => {
        const bikeInfo = [];
        snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
        setBikedatas(bikeInfo);
      });
    };

    // Sorting route in ASC order
    const sortBikemodelAsc = () => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('bikemodel',"asc").onSnapshot((snapshot) => {
        const bikeInfo = [];
        snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
        setBikedatas(bikeInfo);
      });
    };
  
    // Sorting route in DESC order
    const sortBikemodelDesc = () => {
      const db = firebase.firestore();
      return db.collection('bike-data-diary').orderBy('bikemodel',"desc").onSnapshot((snapshot) => {
        const bikeInfo = [];
        snapshot.forEach(doc => bikeInfo.push({...doc.data(), id: doc.id }));
        setBikedatas(bikeInfo);
      });
    };
    
   return (
      <div>
        <div className="primary-button-styling">
          <Button variant="primary" onClick={handleShow}>
            Add bike data
          </Button>
        </div>

        {/* <Row> */}
          <div className="table-container">
            {[DropdownButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup} key={idx} id={`dropdown-button-drop-${idx}`} size="sm" className="drowdown-button-date" variant="secondary" title="Date"
              >
                <Dropdown.Item  onClick={sortByAsc} eventKey="1">ASC</Dropdown.Item>
                <Dropdown.Item onClick={sortByDesc} eventKey="2">DESC</Dropdown.Item>
              </DropdownType>
            ))}
            {[DropdownButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup} key={idx} id={`dropdown-button-drop-${idx}`} size="sm" className="drowdown-button-km" variant="secondary" title="Km"
              >
                <Dropdown.Item  onClick={sortKMAsc} eventKey="1">ASC</Dropdown.Item>
                <Dropdown.Item onClick={sortKMDesc} eventKey="2">DESC</Dropdown.Item>
              </DropdownType>
            ))}
            {[DropdownButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup} key={idx} id={`dropdown-button-drop-${idx}`} size="sm" className="drowdown-button-time" variant="secondary" title="Time"
              >
                <Dropdown.Item  onClick={sortTimeAsc} eventKey="1">ASC</Dropdown.Item>
                <Dropdown.Item onClick={sortTimeDesc} eventKey="2">DESC</Dropdown.Item>
              </DropdownType>
            ))}
            {[DropdownButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup} key={idx} id={`dropdown-button-drop-${idx}`} size="sm" className="drowdown-button-route" variant="secondary" title="Route"
              >
                <Dropdown.Item  onClick={sortRouteAsc} eventKey="1">ASC</Dropdown.Item>
                <Dropdown.Item onClick={sortRouteDesc} eventKey="2">DESC</Dropdown.Item>
              </DropdownType>
            ))}
            {[DropdownButton].map((DropdownType, idx) => (
              <DropdownType
                as={ButtonGroup} key={idx} id={`dropdown-button-drop-${idx}`} size="sm" className="drowdown-button-route" variant="secondary" title="Bike model"
              >
                <Dropdown.Item  onClick={sortBikemodelAsc} eventKey="1">ASC</Dropdown.Item>
                <Dropdown.Item onClick={sortBikemodelDesc} eventKey="2">DESC</Dropdown.Item>
              </DropdownType>
            ))}            
          </div>
        {/* </Row> */}


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bike usage data</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          
          <Container className="container-style">
            <Row>
              <Col xs={4} md={6} >
                <label className="labelname">Date</label><br></br>
                <input
                  value={newBikeDate}
                  className="input input-bikemodel-date"
                  required
                  placeholder="2020-08-01"
                  size="20"
                  onChange={(event) => setNewBikeDate(event.target.value)}
                />
              </Col>
              <Col xs={3} md={6}>
                <label className="labelname labelname-km">Km</label><br></br>
                <input
                  value={newBikeKM}
                  className="input input-bikemodel-km"
                  required
                  placeholder="Km"
                  size="20"
                  onChange={(event) => setNewBikeKM(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={4} md={6}>
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
                  className="input input-bikemodel-mobile"
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
                     className="input input-bikemodel-mobile"
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

         <div>
            {bikedatas.map(bikedata => (
               <li key={bikedata.date} className="listmarker">
                  <ReadBikeDiary bikedata={bikedata} />
               </li>
            ))}
         </div>
         <div className="bottom-spacer"></div>      
      </div>
   );
}

export default DiaryData;