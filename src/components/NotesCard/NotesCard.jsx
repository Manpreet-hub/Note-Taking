import { useNotes } from "../../contexts/note-context";
import "./notes-card.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArchiveIcon from "@mui/icons-material/Archive";
import PushPinIcon from "@mui/icons-material/PushPin";

const NotesCard = () => {
  const { noteState, noteDispatch } = useNotes();
  return (
    <>
      <div className="notes-container">
        {noteState.note.map((notes) => {
          return (
            <div className="notes-card">
              <div className="card-icons">
                <PushPinIcon />
              </div>
              <div className="card-body">
                <h3 className="note-title"> {notes.title}</h3>

                <p className="card-text">
                  <div dangerouslySetInnerHTML={{ __html: notes.content }} />
                </p>
              </div>
              <div className="card-icons">
                <ArchiveIcon
                  onClick={(e) =>
                    noteDispatch({ type: "MOVE_TO_ARCHIVE", payload: notes })
                  }
                />
                <DeleteOutlineIcon
                  onClick={(e) => {
                    noteDispatch({
                      type: "MOVE_TO_TRASH",
                      payload: notes,
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { NotesCard };
