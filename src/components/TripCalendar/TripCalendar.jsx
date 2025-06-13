import React, { useState, useEffect, useContext } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TripCalendar.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function TripCalendar({ trips }) {
  const { currentUser } = useContext(CurrentUserContext);

  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});

  const userTrips = trips.filter((trip) => {
    trip.owner === currentUser?._id;
  });

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("calendarNotes")) || {};
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("calendarNotes", JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (e) => {
    const value = e.target.value;
    const dateStr = date.toDateString();

    setNotes((prev) => ({
      ...prev,
      [dateStr]: value,
    }));
  };

  const getTripsForDate = (selectedDate) => {
    return (
      userTrips?.filter((trip) => {
        const start = new Date(trip.startDate);
        const end = new Date(trip.endDate);
        const date = new Date(selectedDate);
        return date >= start && date <= end;
      }) || []
    );
  };

  return (
    <div className="trip-calendar app__section">
      <h2 className="calendar-title"> Travel Calendar</h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileContent={({ date }) => {
          const tripsOnDay = getTripsForDate(date);
          const note = notes[date.toDateString()];
          return tripsOnDay.length > 0 ? (
            <div className="calendar-tile-content">
              {tripsOnDay.map((trip) => (
                <div key={trip._id} className="calendar-trip-name">
                  {trip.name}
                </div>
              ))}
              {note && (
                <div className="calendar-note">
                  {note.split("\n").map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              )}
            </div>
          ) : null;
        }}
      />
      <h3 className="calendar-notes">Notes for {date.toDateString()}</h3>
      <textarea
        className="calendar-notes-text"
        value={notes[date.toDateString()] || ""}
        onChange={handleNoteChange}
        placeholder="Write your notes here... "
      />
    </div>
  );
}

export default TripCalendar;
