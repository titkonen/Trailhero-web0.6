import React from 'react';
import { Button, Toast, Row, Col } from 'react-bootstrap';

const ShowToaster = () => {
   const [show, setShow] = React.useState(true);
   
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

export default ShowToaster;