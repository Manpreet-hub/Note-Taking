import { useNotes } from "../../contexts/note-context";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArchiveIcon from "@mui/icons-material/Archive";
import PushPinIcon from "@mui/icons-material/PushPin";

const PinnedNote = () => {
  const { noteState, noteDispatch } = useNotes();
  return (
    <>
      {noteState.pinnedNote.length !== 0 && (
        <>
          <h2 className="notes-section-title">PINNED</h2>
          <div className="notes-container">
            {noteState.pinnedNote.map((notes) => {
              return (
                <div className="notes-card">
                  <div className="card-icons">
                    <PushPinIcon
                      onClick={() =>
                        noteDispatch({ type: "UNPINNED_NOTE", payload: notes })
                      }
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="note-title"> {notes.title}</h3>

                    <p className="card-text">
                      <div
                        dangerouslySetInnerHTML={{ __html: notes.content }}
                      />
                    </p>
                  </div>
                  <div className="card-icons">
                    <ArchiveIcon
                      onClick={(e) =>
                        noteDispatch({
                          type: "MOVE_TO_ARCHIVE",
                          payload: notes,
                        })
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
          <h2 className="notes-section-title">Others</h2>
        </>
      )}
    </>
  );
};

export { PinnedNote };
