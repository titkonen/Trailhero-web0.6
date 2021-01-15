import React from 'react';
import { Spinner } from 'react-bootstrap';

function ShowLoader() {
   return (
      <div>
         <p>Saved...</p>
         <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
         </Spinner>
      </div>
   );
}

export default ShowLoader;