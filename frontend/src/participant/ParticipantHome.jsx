import React, { useEffect, useState } from "react";
import ParticipantNavbar from "./components/Navbar";
import ParticipantFooter from "./components/Footer";
import MyEvents from "./components/MyEvents";
import Hello from "./components/Hello";
import { useParams } from "react-router-dom";
import axios from "axios";

const Element = ({ element, user }) => {
  if (element === "home") {
    return <Hello user={user} />;
  } else if (element === "my-events") {
    return <MyEvents user={user} />;
  } else if (element === "ongoing-events") {
    return <div>Ongoing Events</div>;
  } else if (element === "upcoming-events") {
    return <div>Upcoming Events</div>;
  } else if (element === "sign-out") {
    return <div>Sign Out</div>;
  }
  return <div>Error 123</div>;
};

const ParticipantHome = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const [element, setElement] = useState("home");
  useEffect(() => {
    axios
      .get(`http://localhost:5555/users/${id}`)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <ParticipantNavbar element={element} setElement={setElement} />
      <Element element={element} user={user} />
      <ParticipantFooter setElement={setElement} />
    </div>
  );
};

export default ParticipantHome;
