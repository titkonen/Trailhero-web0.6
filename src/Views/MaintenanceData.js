import React from 'react';
import firebase from '../firebase';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';

import './Maintenance.css';
import '../App.css';
import { ReadMaintenance } from '../components/ReadMaintenance';

function MaintenanceData() {
  const [maintenanceinfos, setMaintenanceinfos] = React.useState([])
  // const [maintenance, setMaintenance] = React.useState([])

  const [newBikeName, setNewBikeName] = React.useState() // Adds name to bike
  const [newFrontFork, setNewFrontFork] = React.useState()
  const [newRearShock, setNewRearShock] = React.useState()

  const [newFrontWheel, setNewFrontWheel] = React.useState()
  const [newFrontTire, setNewFrontTire] = React.useState()
  const [newRearWheel, setNewRearWheel] = React.useState()
  const [newRearTire, setNewRearTire] = React.useState()

  const [newFrontBrake, setNewFrontBrake] = React.useState()
  const [newRearBrake, setNewRearBrake] = React.useState()

  const [newRearDerailleur, setNewRearDerailleur] = React.useState()
  const [newShifters, setNewShifters] = React.useState()
  const [newCrankset, setNewCrankset] = React.useState()
  const [newCassette, setNewCassette] = React.useState()
  const [newChain, setNewChain] = React.useState()
  const [newBottomBracket, setNewBottomBracket] = React.useState()
  const [newHeadset, setNewHeadset] = React.useState()
  const [newBars, setNewBars] = React.useState()
  const [newBrakeRotors, setNewBrakeRotors] = React.useState()
  const [newStem, setNewStem] = React.useState()  
  const [newGrips, setNewGrips] = React.useState()
  const [newSeatpost, setNewSeatpost] = React.useState()
  const [newSaddle, setNewSaddle] = React.useState()
  const [newExtraMemo, setNewExtraMemo] = React.useState()

  //Modal Const's
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Bike Basic info 
  React.useEffect(() => {
    const db = firebase.firestore();
    return db.collection('maintenance').onSnapshot((snapshot) => {
      const huoltotieto = [];
      snapshot.forEach(doc => huoltotieto.push({ ...doc.data(), id: doc.id }));
      setMaintenanceinfos(huoltotieto);
    });
  }, []);

  const saveAll = () => {
    const db = firebase.firestore();
    db.collection('maintenance').add({
      bikename: newBikeName,
      frontfork: newFrontFork,
      rearshock: newRearShock,
      frontwheel: newFrontWheel,
      fronttire: newFrontTire,
      rearwheel: newRearWheel,
      reartire: newRearTire,
      frontbrake: newFrontBrake,
      rearbrake: newRearBrake,
      rearderailleur: newRearDerailleur,
      shifters: newShifters,
      crankset: newCrankset,
      cassette: newCassette,
      chain: newChain,
      bottombracket: newBottomBracket,
      headset: newHeadset,
      bars: newBars,
      brakerotors: newBrakeRotors,
      stem: newStem,
      grips: newGrips,
      seatpost: newSeatpost,
      saddle: newSaddle,
      extramemo: newExtraMemo
    });
    handleClose();
  }


  return (
    <div>

      <div className="mt-60 ml-40">
        <Button variant="primary" onClick={handleShow}>
          Add bike components
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bike components</Modal.Title>
        </Modal.Header>
        <Modal.Body className="maintenance-modal-body show-grid">
          <Container className="container-style">
            {/* <Row><h4 className="subheading-info">Suspensions</h4></Row> */}
            <Row>
              <Col xs={12}>
                <label className="labelname">Bike name</label><br></br>
                <input
                  value={newBikeName}
                  className="input"
                  placeholder="Bike name"
                  size="20"
                  onChange={(event) => setNewBikeName(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Front fork</label><br></br>
                <input
                  value={newFrontFork}
                  className="input"
                  placeholder="Front fork"
                  size="20"
                  onChange={(event) => setNewFrontFork(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Rear shock</label><br></br>
                <input
                  value={newRearShock}
                  className="input"
                  placeholder="Rear shock"
                  size="20"
                  onChange={(event) => setNewRearShock(event.target.value)}
                />
              </Col>
            </Row>
            {/* <Row><h4 className="subheading-info">Wheels</h4></Row> */}
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Front wheel</label><br></br>
                <input
                  value={newFrontWheel}
                  className="input"
                  placeholder="Front wheel"
                  size="20"
                  onChange={(event) => setNewFrontWheel(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Front tire</label><br></br>
                <input
                  value={newFrontTire}
                  className="input"
                  placeholder="Front tire"
                  size="20"
                  onChange={(event) => setNewFrontTire(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Rear wheel</label><br></br>
                <input
                  value={newRearWheel}
                  className="input"
                  placeholder="Rear wheel"
                  size="20"
                  onChange={(event) => setNewRearWheel(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Rear tire</label><br></br>
                <input
                  value={newRearTire}
                  className="input"
                  placeholder="Rear tire"
                  size="20"
                  onChange={(event) => setNewRearTire(event.target.value)}
                />
              </Col>
            </Row>
            {/* <Row><h4 className="subheading-info">Brakes</h4></Row> */}
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Front brake</label><br></br>
                <input
                  value={newFrontBrake}
                  className="input"
                  placeholder="Front brake"
                  size="20"
                  onChange={(event) => setNewFrontBrake(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Rear brake</label><br></br>
                <input
                  value={newRearBrake}
                  className="input"
                  placeholder="Rear brake"
                  size="20"
                  onChange={(event) => setNewRearBrake(event.target.value)}
                />
              </Col>
            </Row>
            {/* <Row><h4 className="subheading-info">Drivetrain</h4></Row> */}
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Rear derailleur</label><br></br>
                <input
                  value={newRearDerailleur}
                  className="input"
                  placeholder="Rear derailleur"
                  size="20"
                  onChange={(event) => setNewRearDerailleur(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Shifters</label><br></br>
                <input
                  value={newShifters}
                  className="input"
                  placeholder="Shifters"
                  size="20"
                  onChange={(event) => setNewShifters(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Crankset</label><br></br>
                <input
                  value={newCrankset}
                  className="input"
                  placeholder="Crankset"
                  size="20"
                  onChange={(event) => setNewCrankset(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Cassette</label><br></br>
                <input
                  value={newCassette}
                  className="input"
                  placeholder="Cassette"
                  size="20"
                  onChange={(event) => setNewCassette(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Chain</label><br></br>
                <input
                  value={newChain}
                  className="input"
                  placeholder="Chain"
                  size="20"
                  onChange={(event) => setNewChain(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Bottom Bracket</label><br></br>
                <input
                  value={newBottomBracket}
                  className="input"
                  placeholder="Bottom Bracket"
                  size="20"
                  onChange={(event) => setNewBottomBracket(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Headset</label><br></br>
                <input
                  value={newHeadset}
                  className="input"
                  placeholder="Headset"
                  size="20"
                  onChange={(event) => setNewHeadset(event.target.value)}
                />
              </Col>
              <Col xs={12} md={6}>
                <label className="labelname">Bars</label><br></br>
                <input
                  value={newBars}
                  className="input"
                  placeholder="Bars"
                  size="20"
                  onChange={(event) => setNewBars(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                  <label className="labelname">Brake Rotors</label><br></br>
                  <input
                    value={newBrakeRotors}
                    className="input"
                    placeholder="Brake Rotors"
                    size="20"
                    onChange={(event) => setNewBrakeRotors(event.target.value)}
                  />
              </Col>
              <Col xs={12} md={6}>
                  <label className="labelname">Stem</label><br></br>
                  <input
                    value={newStem}
                    className="input"
                    placeholder="Stem"
                    size="20"
                    onChange={(event) => setNewStem(event.target.value)}
                  />
              </Col>
              <Col xs={12} md={6}>
                  <label className="labelname">Grips</label><br></br>
                  <input
                    value={newGrips}
                    className="input"
                    placeholder="Grips"
                    size="20"
                    onChange={(event) => setNewGrips(event.target.value)}
                  />
              </Col>
              <Col xs={12} md={6}>
                  <label className="labelname">Seatpost</label><br></br>
                  <input
                    value={newSeatpost}
                    className="input"
                    placeholder="Seatpost"
                    size="20"
                    onChange={(event) => setNewSeatpost(event.target.value)}
                  />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                    <label className="labelname">Saddle</label><br></br>
                    <input
                      value={newSaddle}
                      className="input"
                      placeholder="Saddle"
                      size="20"
                      onChange={(event) => setNewSaddle(event.target.value)}
                    />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label className="labelname">Additional info</label><br></br>
                  <textarea 
                    name="info" 
                    rows="5" 
                    cols="53"
                    className="input"
                    value={newExtraMemo}
                    placeholder="Additional info"
                    onChange={(event) => setNewExtraMemo(event.target.value)}
                  ></textarea>
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

        <div className="grey">
          <div className="grey ml-40">
            {maintenanceinfos.map(maintenanceinfo => (
              <li
                key={maintenanceinfo.frontfork}
                className="listmarker"
              >
                <ReadMaintenance 
                  maintenanceinfo={maintenanceinfo} 
                />
              </li>
            ))}
          
          </div>
          
        </div>
        
      </div >
    );
}

export default MaintenanceData;
