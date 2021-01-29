import React from 'react';
import './Notes.css';
import firebase from '../firebase';
import NoteInput from './NoteInput';
import Footer from '../components/Footer';
// import { Container, Row, Col } from 'react-bootstrap';

function NotesData() {
  const [notes, setNotes] = React.useState([])
  const [newNoteText, setNewNoteText] = React.useState()

  React.useEffect(() => {
      const db = firebase.firestore();
      return db.collection('notes').onSnapshot((snapshot) => {
        const notesData = [];
        snapshot.forEach(doc => notesData.push({...doc.data(), id: doc.id }));
        setNotes(notesData);
      });
  }, []);

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection('notes').add({ 
      text: newNoteText
    });
  }

  return (
    <div className="notes-header">
      <h1 className="heading">Notes</h1>
      <ul>
        <input 
          value={newNoteText}
          className="input-style" 
          placeholder="Note text"
          onChange={(event) => setNewNoteText(event.target.value)} 
        />
        <button onClick={onCreate} className="button">Add</button>
      </ul>  

      {notes.map(note => (
        // <Container fluid>
        // <Row>
        //   <Col xs={3} sm={3} md={3} lg={3}  >
        //     <div className="grid-container" key={note.text}>
        //       <div class="grid-item"><NoteInput note={note} /></div>
        //     </div>
        //   </Col>
        // </Row>
        // </Container>

          <div className="grid-container" key={note.text}>
            <div class="grid-item"><NoteInput note={note} /></div>
          </div>
        ))}
      <Footer />
    </div>   
  );
}

export default NotesData;
