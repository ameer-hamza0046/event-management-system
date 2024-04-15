import React from "react";
import OrganizerNavbar from "./components/OrganizerNavbar";
import OrganizerFooter from "./components/OrganizerFooter";
import CreateEvent from "./components/CreateEvent";
import Hello from "./components/Hello";
import MyEvents from "./components/MyEvents";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Element = ({ element, user }) => {
  if (element === "home") {
    return <Hello user={user} />;
  } else if (element === "create-event") {
    return <CreateEvent user={user} />;
  } else if (element === "my-events") {
    return <MyEvents user={user} />;
  }
  return <div>Error 123</div>;
};

const OrganizerHome = () => {
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
      <OrganizerNavbar element={element} setElement={setElement} />
      <Element user={user} element={element} />
      <OrganizerFooter setElement={setElement} />
    </div>
  );
};

export default OrganizerHome;
