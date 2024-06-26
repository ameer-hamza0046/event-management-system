import React, { useEffect, useState } from "react";
import ParticipantNavbar from "./components/ParticipantNavbar";
import ParticipantFooter from "./components/ParticipantFooter";
import MyEvents from "./components/MyEvents";
import Hello from "./components/Hello";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UpcomingEvents from "./components/UpcomingEvents";

const Element = ({ element, user }) => {
  if (element === "home") {
    return <Hello user={user} />;
  } else if (element === "my-events") {
    return <MyEvents user={user} />;
  } else if (element === "upcoming-events") {
    return <UpcomingEvents user={user} />;
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
