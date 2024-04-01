import React from "react";
import ParticipantNavbar from "../components/participant/ParticipantNavbar";
import ParticipantFooter from "../components/participant/ParticipantFooter";

const ParticipantHome = () => {
  return (
    <div className="container">
      <ParticipantNavbar />
      <ParticipantFooter />
    </div>
  );
};

export default ParticipantHome;
