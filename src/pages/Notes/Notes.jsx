import { Header, Footer } from "../../Layouts/";
import "./notes-page.css";
import { Link } from "react-router-dom";
import { TextEditor } from "../../components/TextEditor/TextEditor";
import { NotesCard } from "../../components/NotesCard/NotesCard";

const Notes = () => {
  return (
    <>
      <Header />
      <div className="sidebar">
        <div className="sidebar-icon">
          <div className="sidebar-icon-option">
            <Link className="link" to="/notes">
              Notes
            </Link>
          </div>
          <div className="sidebar-icon-option">
            <Link className="link" to="/archives">
              Archives
            </Link>
          </div>
          <div className="sidebar-icon-option">
            <Link className="link" to="/labels">
              Labels
            </Link>
          </div>
          <div className="sidebar-icon-option">
            <Link className="link" to="/trash">
              Trash
            </Link>
          </div>
        </div>
      </div>
      <TextEditor />
      <NotesCard />
      <Footer />
    </>
  );
};

export { Notes };
