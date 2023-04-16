// Note.js
import React, { useState } from 'react';
import './Note.css';

function Note({ addNote }) {
  const [text, setText] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addNote(text);
      setText('');
    }
  };
  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="note-input"
        placeholder="Add a new note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="note-button">
        Add Note
      </button>
    </form>
  );
}

export default Note;