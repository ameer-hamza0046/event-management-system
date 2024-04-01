import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";

const ModeratorLogin = () => {
  return (
    <div className="container">
      <Navbar />
      <Login role={"Moderator"} />
      <Footer />
    </div>
  );
};

export default ModeratorLogin;
