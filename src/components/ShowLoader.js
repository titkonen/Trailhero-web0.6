import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';

function ShowLoader() {
   const [show, setShow] = useState(false);

   return (
      <div>
         {/* <p>Saved...</p> */}
         <Spinner 
            animation="border" role="status"
            onClose={() => setShow(false)} show={show} delay={2000} autohide   
         >
            <span className="sr-only">Loading...</span>
         </Spinner>
      </div>
   );
}

export default ShowLoader;