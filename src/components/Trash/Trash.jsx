import { Header, Footer } from "../../Layouts/";
import { Sidebar } from "../../pages/";
import { useNotes } from "../../contexts/note-context";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

const Trash = () => {
  const { noteState, noteDispatch } = useNotes();
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-container notes-container">
        {noteState.trash.map((item) => {
          return (
            <div className="notes-card">
              <div className="card-icons"></div>
              <div className="card-body">
                <h3 className="note-title"> {item.title}</h3>

                <p className="card-text">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </p>
              </div>
              <div className="card-icons">
                <RestoreFromTrashIcon
                  onClick={(e) => {
                    noteDispatch({ type: "RESTORE_NOTE", payload: item });
                  }}
                />
                <DeleteForeverIcon
                  onClick={(e) => {
                    noteDispatch({
                      type: "DELETE_NOTE",
                      payload: item.id,
                    });
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export { Trash };
