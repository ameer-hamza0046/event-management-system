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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/participant/:id" element={<ParticipantHome />} />
      <Route path="/organizer/:id" element={<OrganizerHome />} />
      <Route path="/moderator/:id" element={<ModeratorHome />} />
    </Routes>
  );
};

export default App;
