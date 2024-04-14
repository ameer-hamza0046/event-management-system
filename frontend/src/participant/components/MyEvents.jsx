import React, { useEffect, useState } from "react";
import axios from "axios";

const MyEvents = ({ user }) => {
  const { _id } = user;
  const [events, setEvents] = useState([]);
  console.log(events);
  useEffect(() => {
    axios
      .get(`http://localhost:5555/participation/participantId/${_id}`)
      .then((response) => {
        console.log(response.data);
        Promise.all(
          response.data.map(({ eventId }) =>
            axios.get(`http://localhost:5555/events/${eventId}`)
          )
        )
          .then((value) => {
            setEvents(value.map((e) => e.data));
          })
          .catch((error) => {
            console.log(error);
          });
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

export default MyEvents;
