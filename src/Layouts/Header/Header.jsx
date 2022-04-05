import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="nav">
      <div className="header">
        <div className="navbar-brand-name">
          <h3>
            <Link className="link" to="/">
              MyNotes
            </Link>
          </h3>
        </div>
        <div className="nav-icons">
          <div className="search-box">
            <i className="search-icon fas fa-search" aria-hidden="true"></i>
            <input className="search-bar" type="text" placeholder="Search" />
          </div>
          <section className="nav-authorization nav-option">
            <button className="btn">Login</button>
          </section>
        </div>
      </div>
    </nav>
  );
};

export { Header };
