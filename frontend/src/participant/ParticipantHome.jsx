import React, { useEffect, useState } from "react";
import ParticipantNavbar from "./components/Navbar";
import ParticipantFooter from "./components/Footer";
import Hello from "./components/Hello";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParticipantHome = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
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
      <ParticipantNavbar />
      <Hello user={user} />
      <ParticipantFooter />
    </div>
  );
};

export default ParticipantHome;
