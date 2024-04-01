import React from "react";
import { Link } from "react-router-dom";

const Login = ({ role }) => {
  return (
    <form>
      <h2>{role} Login</h2>
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
      <Link to={`/${role.toLowerCase()}/home`} className="btn btn-primary">
        Sign In
      </Link>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
    </form>
  );
};

export default Login;
