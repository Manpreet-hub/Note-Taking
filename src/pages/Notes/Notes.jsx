import { Header, Footer } from "../../Layouts/";
import "./notes-page.css";
import { TextEditor } from "../../components/TextEditor/TextEditor";
import { NotesCard } from "../../components/NotesCard/NotesCard";
import { PinnedNote } from "../../components/PinnedNotes/PinnedNotes";
import { Sidebar } from "./Sidebar";

const Notes = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <TextEditor />
      <PinnedNote />
      <NotesCard />
      <Footer />
    </>
  );
};

export { Notes };
