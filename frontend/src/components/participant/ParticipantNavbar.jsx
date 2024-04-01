import React from "react";
import NavComp from "../misc/NavComp";

const ParticipantNavbar = () => {
  return (
    <NavComp
      homeAddress="/participant/home"
      navList={[
        { location: "/participant/home", text: "Home" },
        { location: "/participant/my-events", text: "My Events" },
        { location: "/participant/ongoing-events", text: "Ongoing Events" },
        { location: "/participant/upcoming-events", text: "Upcoming Events" },
        { location: "/", text: "Sign Out" },
      ]}
    />
  );
};

export default ParticipantNavbar;
