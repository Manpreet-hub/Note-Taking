import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";
import { useState } from "react";
import { useNotes } from "../../contexts/note-context";
import { modules, formats } from "../../constants/editor-constant";
import { v4 as uuidv4 } from "uuid";

const TextEditor = () => {
  const [note, setNote] = useState({ id: "", title: "", content: "" });
  const { noteState, noteDispatch } = useNotes();

  return (
    <div className="note-editor">
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          setNote({ id: "", title: "", content: "" });
          noteDispatch({ type: "ADD_NOTE", payload: note });
        }}
      >
        <input
          className="notes-title"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={(e) =>
            setNote({ ...note, title: e.target.value, id: uuidv4() })
          }
        />
        <ReactQuill
          theme="snow"
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e, id: uuidv4() })}
          className="notes-text"
          modules={modules}
          formats={formats}
          placeholder="Take a Note..."
        />

        <div className="btn-container">
          <button type="submit" className="btn-dark notes-btn">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export { TextEditor };
