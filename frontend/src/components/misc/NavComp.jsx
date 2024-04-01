import React from "react";
import { Link } from "react-router-dom";

const NavComp = ({ homeAddress, navList }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to={homeAddress}>
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
          {navList.map(({ location, text }, index) => (
            <li className="nav-item" key={index}>
              <Link className="nav-link" to={location}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavComp;
