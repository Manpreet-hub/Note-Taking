import { Header, Footer } from "../../Layouts/";
import "./notes-page.css";
import { TextEditor } from "../../components/TextEditor/TextEditor";
import { NotesCard } from "../../components/NotesCard/NotesCard";
import { Sidebar } from "./Sidebar";

const Notes = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <TextEditor />
      <NotesCard />
      <Footer />
    </>
  );
};

export { Notes };
