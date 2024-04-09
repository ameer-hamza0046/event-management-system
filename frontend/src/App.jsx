import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./home/About";
import Contact from "./home/Contact";
import SignUp from "./home/SignUp";
import Login from "./home/Login";
import ParticipantHome from "./participant/ParticipantHome";
import OrganizerHome from "./organizer/OrganizerHome";
import ModeratorHome from "./moderator/ModeratorHome";
import ParticipantMyEvents from "./participant/ParticipantMyEvents";
import ParticipantOngoingEvents from "./participant/ParticipantOngoingEvents";
import ParticipantUpcomingEvents from "./participant/ParticipantUpcomingEvents";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/participant/home" element={<ParticipantHome />} />
      <Route path="/participant/my-events" element={<ParticipantMyEvents />} />
      <Route
        path="/participant/ongoing-events"
        element={<ParticipantOngoingEvents />}
      />
      <Route
        path="/participant/upcoming-events"
        element={<ParticipantUpcomingEvents />}
      />
      <Route path="/organizer/home" element={<OrganizerHome />} />
      <Route path="/moderator/home" element={<ModeratorHome />} />
    </Routes>
  );
};

export default App;
