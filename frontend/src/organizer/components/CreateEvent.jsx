import React, { useState } from "react";
import axios from "axios";

// 1. create form to enter name and date and time
// 2. set min date and max date
// 3. on submission add event to the database as with status "pending" and with organizer email ID

const CreateEvent = ({ user }) => {
  const curDate = new Date();
  const minDate = curDate.toISOString().slice(0, 16);
  const x = 10; // adding x days to curDate to get MaxDate
  const maxDate = new Date(curDate.getTime() + x * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 16);
  ////////////////
  const [eventName, setEventName] = useState("");
  const [eventTime, setEventTime] = useState("");
  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!eventName || !eventTime) {
      alert("All fields are necessary.");
      return;
    }
    const event = {
      name: eventName,
      time: eventTime,
      status: "pending",
      organizerEmail: user.email,
    };
    axios
      .post("http://localhost:5555/events", event)
      .then((response) => {
        console.log(response.data);
        alert("Event Request Submitted Successfully.");
      })
      .catch((error) => {
        alert("Error");
        console.log(error);
      });
  };
  return (
    <form>
      <h2>Create Event</h2>
      <div className="form-group">
        <label htmlFor="inputEventName">Event Name</label>
        <input
          type="text"
          className="form-control"
          id="inputEventName"
          placeholder="Enter name of the event"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputEventDate">Event Date and Time</label>
        <input
          type="datetime-local"
          className="form-control"
          id="inputEventDate"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
          min={minDate}
          max={maxDate}
        />
      </div>
      <button onClick={handleCreateEvent} className="btn btn-primary">
        Create Event
      </button>
    </form>
  );
};

export default CreateEvent;
