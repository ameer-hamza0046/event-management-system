import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";

const OrganizerLogin = () => {
  return (
    <div className="container">
      <Navbar />
      <Login role={"Organizer"} />
      <Footer />
    </div>
  );
};

export default OrganizerLogin;
