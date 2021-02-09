import React from 'react';
import firebase from '../firebase';
import './Notes.css';
import { Button } from 'react-bootstrap';

const NoteInput = ({ note }) => {
   const [text, setText] = React.useState(note.text);

   const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('notes').doc(note.id).set({ ...note, text })
   }

   const onDelete = () => {
      const db = firebase.firestore()
      db.collection('notes').doc(note.id).delete()
   }

   return (
      <div className="note-wrapper">
         <textarea
            value={text} 
            className="note" 
            rows="4" 
            
            cols="30"
            onChange={(event) => {
               setText(event.target.value);
            }} 
         >
 
         </textarea>
         <br></br>
         {/* <button className="button-edit" onClick={onUpdate}>Update</button> */}
         <Button className="button-blue" variant="light" onClick={onUpdate}>UPDATE</Button>
         <Button className="button-red" variant="light" onClick={onDelete}>DELETE</Button>
         {/* <button className="button-delete-notes" onClick={onDelete}>Delete</button> */}
      </div>
   )
}

export default NoteInput;
