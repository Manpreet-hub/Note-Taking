import { Header, Footer } from "../../Layouts/";
import { Sidebar } from "../../pages/";
import { useNotes } from "../../contexts/note-context";

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
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export { Trash };
