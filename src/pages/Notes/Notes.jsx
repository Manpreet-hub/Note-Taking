import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import "./notes-page.css";
import { Link } from "react-router-dom";

const Notes = () => {
  return (
    <>
      <Header />
      <div className="sidebar">
        <div className="sidebar-icon">
          <div className="sidebar-icon-option">
            <Link className="link" to="/new-notes">
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
      <Footer />
    </>
  );
};

export { Notes };
