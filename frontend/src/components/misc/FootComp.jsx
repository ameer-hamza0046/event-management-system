import React from "react";
import { Link } from "react-router-dom";

const FootComp = ({ footList }) => {
  return (
    <footer className="py-3 my-4">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        {footList.map(({ location, text }, index) => (
          <li className="nav-item" key={index}>
            <Link className="nav-link px-2 text-muted" to={location}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-center text-muted">© 2022 Company, Inc</p>
    </footer>
  );
};

export default FootComp;
