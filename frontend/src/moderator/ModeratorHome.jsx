import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ModeratorNavbar from "./components/ModeratorNavBar";
import ModeratorFooter from "./components/ModeratorFooter";
import Hello from "./components/Hello";
import ViewEvents from "./components/ViewEvents";

const Element = ({ element, user }) => {
  if (element === "home") {
    return <Hello user={user} />;
  } else if (element === "view-events") {
    return <ViewEvents user={user} />;
  }
  return <div>Error 123</div>;
};

const ModeratorHome = () => {
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
      <ModeratorNavbar element={element} setElement={setElement} />
      <Element user={user} element={element} />
      <ModeratorFooter setElement={setElement} />
    </div>
  );
};

export default ModeratorHome;
