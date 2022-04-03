import { Route, Routes } from "react-router-dom";
import { Home, Notes } from "../../pages/";
import { Trash } from "../Trash/Trash";
import { Archives } from "../Archives/Archives";
import { Labels } from "../Labels/Labels";
import { Note } from "../Notes/Note";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/new-notes" element={<Note />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/archives" element={<Archives />} />
      <Route path="/labels" element={<Labels />} />
    </Routes>
  );
};

export { Routers };
