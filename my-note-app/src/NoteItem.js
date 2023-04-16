// NoteItem.js
import React from 'react';
import './Note.css';

function NoteItem({ note, deleteNote }) {
  return (
    <li className="note-item">
      <h3>{note.text}</h3>
      <button className="delete-button" onClick={() => deleteNote(note.id)}>
        Delete
      </button>
    </li>
  );
}

export default NoteItem;