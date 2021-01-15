import React from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import './Views.css';

function TestingView() {

   //Modal Const's
   const [show, setShow] = React.useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);

   //Spinner Const's
   const [showSpinner, setShowSpinner] = React.useState(false);
   const handleSpinnerClose = () => setShowSpinner(false);
   const handleSpinnerShow = () => setShowSpinner(true);


   return (
      <div>

         <h2 className="subheading-welcome">TestingView</h2>
         <p className="content-about">This is testing view for testing purposes.</p>

         <Button variant="primary" onClick={handleShow}>
            Open Modal
            </Button>

         <Button variant="secondary" onClick={handleSpinnerShow}>
            Open Spinner
            </Button>

         {/* <Spinner 
               show={showSpinner}
               onHide={handleSpinnerClose}
               animation="border" 
               role="status"
            >
               <span className="sr-only">Loading...</span>
            </Spinner> */}

         {/* <div
            show={showSpinner}
            onHide={handleSpinnerClose}
         >
            <p>This is spinner</p>
            <Spinner animation="border" role="status">
               <span className="sr-only">Loading...</span>
            </Spinner>
         </div> */}

         <Modal 
            show={showSpinner} 
            onHide={handleSpinnerClose}
         >

            {/* <p>This is spinner2</p> */}
            <Spinner 
               animation="border" 
               role="status"
               className="spinner-style"
            >
               {/* <span className="sr-only">Loading...</span> */}
               
            </Spinner>

         </Modal>

         <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
               <Modal.Title>Bike basic information</Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">

              <p>This is modal</p>

            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                  Cancel
               </Button>
               <Button variant="primary" >
                  Save Changes
               </Button>
            </Modal.Footer>
         </Modal>

      </div>
   );
}

export default TestingView;