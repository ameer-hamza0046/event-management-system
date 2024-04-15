import React from "react";
import { Link } from "react-router-dom";

const ParticipantFooter = ({ setElement }) => {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link
            className="nav-link px-2 text-muted"
            onClick={() => setElement("home")}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link px-2 text-muted"
            onClick={() => setElement("my-events")}
          >
            My Events
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link px-2 text-muted"
            onClick={() => setElement("upcoming-events")}
          >
            Upcoming Events
          </Link>
        </li>
      </ul>
      <p className="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  );
};

export default ParticipantFooter;
