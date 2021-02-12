import React from 'react';
import firebase from '../firebase';
import './Notes.css';
import '../App.css';
import { Button, Row, Col, Toast } from 'react-bootstrap';

const NoteInput = ({ note }) => {
   const [text, setText] = React.useState(note.text);
   const [isLoaded, setIsLoaded] = React.useState(false);
   const [show, setShow] = React.useState(true);

   const onUpdate = () => {
      setIsLoaded(true);
      setShow(true);
      const db = firebase.firestore()
      db.collection('notes').doc(note.id).set({ ...note, text })
   }

   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('notes').doc(note.id).delete()
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
      <div className="note-wrapper">
         <textarea
            value={text} className="note" rows="4" cols="30"
            onChange={(event) => {setText(event.target.value); }} >
         </textarea>
         <Button className="button-blue" variant="light" onClick={onUpdate}>UPDATE</Button>
         <Button className="button-red" variant="light" onClick={onDelete}>DELETE</Button>
         { isLoaded && <div> <ShowToaster /> </div> }
      </div>
   )
}

export default NoteInput;