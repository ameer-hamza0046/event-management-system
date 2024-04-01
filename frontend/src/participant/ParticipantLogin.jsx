import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";

const ParticipantLogin = () => {
  return (
    <div className="container">
      <Navbar />
      <Login role={"Participant"} />
      <Footer />
    </div>
  );
};

export default ParticipantLogin;
