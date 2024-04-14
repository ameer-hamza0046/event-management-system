import React from "react";
import ParticipantNavbar from "../components/participant/ParticipantNavbar";
import ParticipantFooter from "../components/participant/ParticipantFooter";
import { useLocation } from "react-router-dom";

const ParticipantHome = () => {
  const data = useLocation().state;
  console.log(data);
  return (
    <div className="container">
      <ParticipantNavbar />
      <h2>Hello, {data.name}</h2>
      <h3>{data.role}</h3>
      {Object.keys(data).map((key, index) => (
        <div key={index}>
          {key}: {data[key]}
        </div>
      ))}
      <ParticipantFooter />
    </div>
  );
};

export default ParticipantHome;
