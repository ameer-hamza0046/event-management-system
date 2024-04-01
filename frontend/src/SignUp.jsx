import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const SignUp = () => {
  return (
    <div className="container">
      <Navbar />
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Apple Papaya"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="name@example.com"
          />
        </div>
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
          <label htmlFor="setPassword">Set Password</label>
          <input
            type="password"
            className="form-control"
            id="setPassword"
            placeholder="Enter Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="reEnterPassword">Re-Enter Password</label>
          <input
            type="password"
            className="form-control"
            id="reEnterPassword"
            placeholder="Re-Enter Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default SignUp;
