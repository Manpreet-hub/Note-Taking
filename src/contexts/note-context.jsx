import { createContext, useContext, useReducer } from "react";
import { noteReducer } from "../reducers/note-reducer";

const NotesContext = createContext();
const useNotes = () => useContext(NotesContext);
const NotesProvider = ({ children }) => {
  const initialValue = { note: [], trash: [], archive: [], pin: [] };
  const [noteState, noteDispatch] = useReducer(noteReducer, initialValue);

  return (
    <NotesContext.Provider value={{ noteState, noteDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export { NotesProvider, useNotes };
