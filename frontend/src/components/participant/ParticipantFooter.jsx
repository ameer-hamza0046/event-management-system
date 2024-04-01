import React from "react";
import FootComp from "../misc/FootComp";

const ParticipantFooter = () => {
  return (
    <FootComp
      footList={[
        { location: "/participant/home", text: "Home" },
        { location: "/participant/my-events", text: "My Events" },
        { location: "/participant/ongoing-events", text: "Ongoing Events" },
        { location: "/participant/upcoming-events", text: "Upcoming Events" },
        { location: "/", text: "Sign Out" },
      ]}
    />
  );
};

export default ParticipantFooter;
