import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ParticipantNavbar = ({ element, setElement }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" onClick={() => setElement("home")}>
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className={`nav-link ${element === "home" ? "active" : ""}`}
              onClick={() => setElement("home")}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${element === "my-events" ? "active" : ""}`}
              onClick={() => setElement("my-events")}
            >
              My Events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${
                element === "upcoming-events" ? "active" : ""
              }`}
              onClick={() => setElement("upcoming-events")}
            >
              Upcoming Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ParticipantNavbar;
