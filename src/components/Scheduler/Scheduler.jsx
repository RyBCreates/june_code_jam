import { useContext, useState } from "react";

import "./Scheduler.css";
import CurrentTripContext from "../../contexts/CurrentTripContext";

function Scheduler({ onAddEvent }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    if (!location.trim()) {
      alert("Please enter your destination");
      return;
    }

    if (!startTime.trim()) {
      alert("Please enter your start time");
      return;
    }

    if (!endTime.trim()) {
      alert("Please enter your end time");
      return;
    }

    //if start time is after end time, throw error
    // if (new (Time)(startTime) > new (Time)(endTime) {
    //   alert("Start time must be before end time");
    //   return;
    // }

    onAddEvent(name, startTime, endTime, location)
      .then(() => {
        setName("");
        setStartTime("");
        setEndTime("");
        setLocation("");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="scheduler">
      <form className="scheduler__form" onSubmit={handleSubmit}>
        <div className="scheduler__input_type_text">
          <label htmlFor="event-name" className="scheduler__label">
            Event Name *
            <input
              required
              className="scheduler__input"
              type="text"
              id="event-name"
              placeholder="Go to Lunch"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
        </div>

        <div className="scheduler__input_type_text">
          <label htmlFor="event-address" className="scheduler__label">
            Event Address *
            <input
              required
              className="scheduler__input"
              type="text"
              id="event-address"
              placeholder="123 Main St."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="scheduler__input_type_text">
          <label htmlFor="event-start-time" className="scheduler__label">
            Event Start Time *
            <input
              required
              className="scheduler__input"
              type="time"
              id="event-start-time"
              placeholder="11:00 AM"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="scheduler__input_type_text">
          <label htmlFor="event-end-time" className="scheduler__label">
            Event End Time *
            <input
              required
              className="scheduler__input"
              type="time"
              id="event-end-time"
              placeholder="12:00 PM"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            ></input>
          </label>
        </div>
        <button className="scheduler__button" type="submit">
          Add to Schedule
        </button>
      </form>
    </div>
  );
}

export default Scheduler;
