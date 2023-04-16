import { useState } from 'react'; // Import the useState hook to manage component state
import NoteList from './components/NoteList'; // Import the NoteList component to render the list of notes
import './App.css'; // Import the CSS styles for the App component

function App() {
  // Define state variables to manage the list of notes and the text of a new note
  const [notes, setNotes] = useState([]); // The notes state variable is an empty array by default
  const [newNote, setNewNote] = useState(''); // The newNote state variable is an empty string by default

  // Define a function to handle adding a new note to the list
  const handleAddNote = () => {
    // Check if the new note text is not empty or only whitespace
    if (newNote.trim() !== '') {
      // Add a new note object to the notes array with the new note text and the current date
      setNotes([...notes, { text: newNote, date: new Date().toLocaleDateString() }]);
      // Clear the new note text input field by resetting the newNote state variable to an empty string
      setNewNote('');
    }
  };

  // Define a function to handle deleting a note from the list
  const handleDeleteNote = (index) => {
    // Create a new array that removes the note at the specified index from the original notes array
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    // Update the notes state variable with the new array that does not include the deleted note
    setNotes(newNotes);
  };

  // Define a function to handle changes to the new note text input field
  const handleNoteChange = (event) => {
    // Update the newNote state variable with the current value of the input field
    setNewNote(event.target.value);
    // If the Enter key is pressed and the input field is not empty, call the handleAddNote function to add the note to the list
    if (event.key === 'Enter' && event.target.value !== '') {
      handleAddNote();
    }
  };

  // Render the App component with the note input form, the list of notes, and the CSS styles
  return (
    <div className="container">
      <div className="logo">
        <img src="PATRYCJA.IO.png" alt="Logo" />
      </div>
      <div className="note-form">
        <input
          className="note-input"
          type="text"
          placeholder="Enter a note..."
          value={newNote}
          onChange={handleNoteChange}
          onKeyDown={handleNoteChange}
        />
        <button className="note-button" onClick={handleAddNote}>
          Add Note
        </button>
      </div>
      <NoteList notes={notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;
