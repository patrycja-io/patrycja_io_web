import './Note.css';

function NoteList({ notes, handleDeleteNote }) {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <div className="note-item" key={index}>
          <h3>{note.text}</h3>
          <p className="note-date">{note.date}</p>
          <button className="delete-button" onClick={() => handleDeleteNote(index)}>
            <i className="fa fa-trash"></i>Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
