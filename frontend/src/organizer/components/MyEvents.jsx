import React, { useEffect, useState } from "react";
import axios from "axios";

const MyEvents = ({ user }) => {
  const { email } = user;
  const [events, setEvents] = useState([]);
  console.log(events);
  useEffect(() => {
    axios
      // email has special characters such as @, which need to be encoded to be sent in a URL
      .get(`http://localhost:5555/events/organizerEmail/${encodeURI(email)}`)
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Event Name</th>
          <th scope="col">Time</th>
          <th scope="col">Organizer</th>
          <th scope="col">Status</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map((e, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{e.name}</td>
            <td>{e.time}</td>
            <td>{e.organizerEmail}</td>
            <td>{e.status}</td>
            <td>ToDo</td>
          </tr> 
        ))}
      </tbody>
    </table>
  );
};

export default MyEvents;
