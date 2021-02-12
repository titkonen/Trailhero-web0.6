import React from 'react';
import firebase from '../firebase';
import { Button, Modal, Container, Row, Col } from 'react-bootstrap';
import './Info.css';
import '../App.css';
import { ReadBikeBasicInfo } from './ReadBikeBasicInfo';

function InfoData() {
  const [basicinfos, setBasicInfos] = React.useState([])
  const [newBikeModel, setNewBikeModel] = React.useState()
  const [newSerialNumber, setNewSerialNumber] = React.useState()
  const [newPurchaseDate, setNewPurchaseDate] = React.useState()
  const [newPurchasePlace, setNewPurchasePlace] = React.useState()
  const [newExtraMemo, setNewExtraMemo] = React.useState()

  //Modal Const's
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Bike Basic info 
  React.useEffect(() => {
    const db = firebase.firestore();
    return db.collection('bike-basic-info').onSnapshot((snapshot) => {
      const perustieto = [];
      snapshot.forEach(doc => perustieto.push({ ...doc.data(), id: doc.id }));
      setBasicInfos(perustieto);
    });
  }, []);

  const saveAll = () => {
    const db = firebase.firestore();
    db.collection('bike-basic-info').add({
      model: newBikeModel,
      serialnumber: newSerialNumber,
      purchasedate: newPurchaseDate,
      purchaseplace: newPurchasePlace,
      extramemo: newExtraMemo
    });
    handleClose();
  }

  return (
    <div>
      <div className="primary-button-styling">
        <Button variant="primary" onClick={handleShow}>
          Add bike information
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bike basic information</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container className="#">
            <Row>
              <Col xs={6} md={12}>
                <label className="labelname">Bike model</label><br></br>
                <input
                  value={newBikeModel}
                  className="input"
                  required
                  placeholder="Bike model"
                  size="20"
                  onChange={(event) => setNewBikeModel(event.target.value)}
                />
              </Col>
              <Col xs={6} md={6}>
                <label className="labelname">Serial number</label><br></br>
                <input
                  value={newSerialNumber}
                  className="input"
                  required
                  placeholder="Serial number"
                  size="20"
                  onChange={(event) => setNewSerialNumber(event.target.value)}
                />
              </Col>
            </Row>
            <Row>
              <Col xs={6} md={6}>
                <label className="labelname">Purchase Date</label><br></br>
                <input
                  value={newPurchaseDate}
                  className="input"
                  required
                  placeholder="Purchase Date"
                  size="20"
                  onChange={(event) => setNewPurchaseDate(event.target.value)}
                />
              </Col>
              <Col xs={6} md={6}>
                <label className="labelname">Purchase Place</label><br></br>
                <input
                  value={newPurchasePlace}
                  className="input"
                  required
                  placeholder="Purchase Place"
                  size="20"
                  onChange={(event) => setNewPurchasePlace(event.target.value)}
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

      <div className="#">
        <div className="read-list-info">

          {basicinfos.map(basicinfo => (
            <div key={basicinfo.model}>
              <ReadBikeBasicInfo basicinfo={basicinfo} />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

export default InfoData;

