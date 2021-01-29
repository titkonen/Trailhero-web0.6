import React from 'react';
import firebase from '../firebase';
import './Notes.css';

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

   return (<>
      {/* <input 
         value={text} 
         className="note"
         onChange={(event) => {
            setText(event.target.value);
         }} 
      /> */}
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
         <button className="button-edit" onClick={onUpdate}>Update</button>
     
         <button className="button-delete-notes" onClick={onDelete}>Delete</button>
      </div>
   </>   
   )
}

export default NoteInput;
