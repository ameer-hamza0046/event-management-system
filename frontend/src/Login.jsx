import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

// this page is not used... but I am not deleting it, just in case

const Login = () => {
  return (
    <div className="container">
      <Navbar />
      <form>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="roleSelect">Select Role</label>
          <select className="form-control" id="roleSelect" defaultValue="">
            <option value="" disabled>
              Select an input
            </option>
            <option value="participant">Participant</option>
            <option value="organizer">Organizer</option>
            <option value="moderator">Moderator</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        {/* <Link to={`/${role.toLowerCase()}/home`} className="btn btn-primary">
          Sign In
        </Link> */}
        <Link to={`/`} className="btn btn-primary">
          Sign In
        </Link>
        <p>
          <Link to="/signup">Sign Up</Link>
        </p>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
