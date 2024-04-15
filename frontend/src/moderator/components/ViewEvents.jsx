import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewEvents = () => {
  const [events, setEvents] = useState([]);
  console.log(events);
  useEffect(() => {
    axios
      .get("http://localhost:5555/events")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleApprove = (index) => {
    const { _id } = events[index];
    axios
      .put(`http://localhost:5555/events/${_id}`, {
        ...events[index],
        status: "approved",
      })
      .then((response) => {
        console.log(response.data);
        const arr = [...events];
        arr[index] = response.data;
        console.log(arr);
        setEvents(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            <td>
              <button
                className="btn"
                disabled={e.status === "approved" ? true : false}
                onClick={() => handleApprove(index)}
              >
                Approve
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ViewEvents;
