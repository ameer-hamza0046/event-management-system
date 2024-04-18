import React, { useEffect, useState } from "react";
import axios from "axios";

// if the value of "view" is {-1} then this Table will be displayed
const EventTable = ({ setView }) => {
  const [events, setEvents] = useState([]);
  console.log(events);
  useEffect(() => {
    const getEvents = async () => {
      try {
        setEvents((await axios.get("http://localhost:5555/events")).data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
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
const ViewEvent = ({ view, setView, user }) => {
  const [events, setEvents] = useState([]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  let eventTime = new Date().toISOString().slice(0, 16);
  console.log(events);
  ////////////////////////
  useEffect(() => {
    const getEvents = async () => {
      try {
        setEvents((await axios.get("http://localhost:5555/events")).data);
        setLoading(false);
        ////////////////////
        eventTime = events[view].time.slice(0, 16);
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
  }, []);
  /////////////
  const handleComment = async (e) => {
    try {
      e.preventDefault();
      const commentArr = [...events[view].comments];
      commentArr.push({
        data: comment,
        moderatorEmail: user.email,
        time: new Date()
      });
      const response = await axios.put(
        `http://localhost:5555/events/${events[view]._id}`,
        {
          ...events[view],
          comments: commentArr,
        }
      );
      console.log(response.data);
      alert("Comment Submitted...");
      setView(-1);
    } catch (error) {
      console.log(error);
    }
  };
  const handleApprove = async (index) => {
    try {
      const { _id } = events[index];
      const response = await axios.put(`http://localhost:5555/events/${_id}`, {
        ...events[index],
        status: "approved",
      });
      console.log(response.data);
      const arr = [...events];
      arr[index] = response.data;
      setEvents(arr);
    } catch (error) {
      console.log(error);
    }
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
          value={loading ? "" : events[view].name}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Event Date and Time</label>
        <input
          type="datetime-local"
          className="form-control"
          value={loading ? "" : eventTime}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Organizer Email</label>
        <input
          type="text"
          className="form-control"
          value={loading ? "" : events[view].organizerEmail}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Event Status</label>
        <input
          type="text"
          className="form-control"
          value={loading ? "" : events[view].status}
          readOnly
        />
      </div>
      <div className="form-group">
        <label>Comment</label>
        <input
          type="text"
          className="form-control"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button onClick={handleApprove} className="btn btn-primary me-md-2">
        Approve Event
      </button>
      <button onClick={handleComment} className="btn btn-primary me-md-2">
        Send Comment
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
          {(loading ? [] : events[view].comments).map((e, index) => (
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

const ViewEvents = ({ user }) => {
  const [view, setView] = useState(-1);
  return view == -1 ? (
    <EventTable setView={setView} />
  ) : (
    <ViewEvent view={view} setView={setView} user={user} />
  );
};

export default ViewEvents;
