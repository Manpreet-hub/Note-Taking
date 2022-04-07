import { Header, Footer } from "../../Layouts/";
import { Sidebar } from "../../pages/";
import { useNotes } from "../../contexts/note-context";
import ArchiveIcon from "@mui/icons-material/Archive";
import PushPinTwoToneIcon from "@mui/icons-material/PushPinTwoTone";
import UnarchiveIcon from "@mui/icons-material/Unarchive";

const Archives = () => {
  const { noteState, noteDispatch } = useNotes();
  return (
    <>
      <Header />
      <Sidebar />
      <div className="main-container notes-container">
        {noteState.archive.map((item) => {
          return (
            <div className="notes-card">
              <div className="card-icons">
                <PushPinTwoToneIcon
                  onClick={() =>
                    noteDispatch({ type: "PINNED_NOTE", payload: item })
                  }
                />
              </div>
              <div className="card-body">
                <h3 className="note-title"> {item.title}</h3>

                <p className="card-text">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </p>
              </div>
              <div className="card-icons">
                <UnarchiveIcon
                  onClick={(e) => {
                    noteDispatch({ type: "UNARCHIVE", payload: item });
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

export { Archives };
