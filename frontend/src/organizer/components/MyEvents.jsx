import React, { useEffect, useState } from "react";
import axios from "axios";

// if the value of "view" is {-1} then this Table will be displayed
const EventTable = ({ events, setView }) => {
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
              <button className="btn" onClick={() => setView(index)}>
                View Event
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// if the value of "view" is not {-1} then this component will be displayed
const ViewEvent = ({ events, setEvents, view, setView, user }) => {
  const curDate = new Date();
  const minDate = curDate.toISOString().slice(0, 16);
  const x = 10; // adding x days to curDate to get MaxDate
  const maxDate = new Date(curDate.getTime() + x * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 16);
  /////////////
  const [eventName, setEventName] = useState(events[view].name);
  // slice is used to format the date and time so that the input could use it
  const [eventTime, setEventTime] = useState(events[view].time.slice(0, 16));
  /////////////
  const handleEditEvent = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5555/events/${events[view]._id}`, {
        ...events[view],
        name: eventName,
        time: eventTime,
        status: "pending",
      })
      .then((response) => {
        console.log(response.data);
        alert("Request for edit in event submitted...");
        const temp = [...events];
        temp[view] = response.data;
        setEvents(temp);
        setView(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoBack = (e) => {
    e.preventDefault();
    setView(-1);
  };
  return (
    <form>
      <h2>View Event</h2>
      <div className="form-group">
        <label>Event Name</label>
        <input
          type="text"
          className="form-control"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Event Date and Time</label>
        <input
          type="datetime-local"
          className="form-control"
          value={eventTime}
          min={minDate}
          max={maxDate}
          onChange={(e) => setEventTime(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Organizer Name</label>
        <input
          type="text"
          className="form-control"
          value={user.name}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Organizer Email</label>
        <input
          type="text"
          className="form-control"
          value={user.email}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Event Status</label>
        <input
          type="text"
          className="form-control"
          value={events[view].status}
          readOnly
        />
      </div>
      <button onClick={handleEditEvent} className="btn btn-primary">
        Edit Event
      </button>
      <button onClick={handleGoBack} className="btn">
        Go Back
      </button>
      <hr />
      <h3>Moderator Comments</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Moderator Email</th>
            <th scope="col">Time</th>
            <th scope="col">Comment</th>
          </tr>
        </thead>
        <tbody>
          {events[view].comments.map((e, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{e.moderatorEmail}</td>
              <td>{e.time}</td>
              <td>{e.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

// main component of this page
const MyEvents = ({ user }) => {
  const { email } = user;
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(-1);
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
  return view === -1 ? (
    <EventTable events={events} setView={setView} />
  ) : (
    <ViewEvent
      events={events}
      setEvents={setEvents}
      view={view}
      setView={setView}
      user={user}
    />
  );
};

export default MyEvents;
