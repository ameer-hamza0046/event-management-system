import axios from "axios";
import React, { useEffect, useState } from "react";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  console.log(events);
  useEffect(() => {
    axios
      .get("http://localhost:5555/events")
      .then((response) => {
        const cur = new Date();
        const a = response.data.filter(
          ({ time, status }) => cur < new Date(time) && status === "approved"
        );
        setEvents(a);
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
            <td>ToDo</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UpcomingEvents;
