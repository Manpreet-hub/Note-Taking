import { useNotes } from "../../contexts/note-context";
import "./notes-card.css";

const NotesCard = () => {
  const { noteState, noteDispatch } = useNotes();
  return (
    <>
      <div className="notes-container">
        <div className="notes-card">
          <h1>Notes card</h1>
          {noteState.note.map((notes) => {
            return <div></div>;
          })}
        </div>
        <div className="notes-card">
          <h1>Notes card</h1>
        </div>
      </div>
    </>
  );
};

export { NotesCard };
