import './styles.css'; // Assuming you have a stylesheet named styles.css
import { useState } from 'react';
import { Note } from './Node';

export default function App(props) {
  const [notes, setNotes] = useState(props.notes || []); // Set default notes if none provided
  const [newNote, setNewNote] = useState("");

  fetch ('https://jsonplaceholder.typicode.com/comments');

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Create note");
    const newNoteObject = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(), // Use lowercase 'date'
      important: Math.random() < 0.5,
    };
    setNotes([...notes, newNoteObject]); // Use spread syntax for immutability
    setNewNote("");
  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map((note) => (
          <Note key={note.id} {...note} /> // Assuming Note component is defined elsewhere
        ))}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Create Note</button>
      </form>
    </div>
  );
};