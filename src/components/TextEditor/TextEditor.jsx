import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./editor.css";
import { useState } from "react";
import { useNotes } from "../../contexts/note-context";
import { modules, formats } from "../../constants/editor-constant";
const TextEditor = () => {
  const [note, setNote] = useState({ title: "", content: "" });
  const { noteState, noteDispatch } = useNotes();

  // const inputHandler = (e) => {
  //   setNote(e);
  //   console.log(note);
  // };

  const [showColors, setShowColors] = useState(false);

  return (
    <div className="note-editor">
      <form
        className="form-container"
        onSubmit={(e) => {
          e.preventDefault();
          setNote({ title: "", content: "" });
          noteDispatch({ type: "ADD_NOTE", payload: note });
        }}
      >
        <input
          className="notes-title"
          placeholder="Title"
          name="title"
          value={note.title}
          onChange={(e) =>
            // noteDispatch({ type: "SET_TITLE", payload: e.target.value })
            setNote({ ...note, title: e.target.value })
          }
        />
        <ReactQuill
          theme="snow"
          value={note}
          // onChange={inputHandler}
          // onChange={(e) => setNote({ ...note, content: e.target.value })}
          className="notes-text"
          modules={modules}
          formats={formats}
          placeholder="Take a Note..."
        />

        <div className="btns">
          <button type="submit" className="btn-dark notes-btn">
            Add
          </button>
          <button type="submit" className="btn-dark notes-btn">
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export { TextEditor };
