import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TripCalendar.css";

function TripCalendar({ trips }) {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("calendarNotes");
    return savedNotes ? JSON.parse(savedNotes) : {};
  });

  useEffect(() => {
    localStorage.setItem("calendarNotes", JSON.stringify(notes));
  }, [notes]);

  const handleNoteChange = (e) => {
    setNotes({
      ...notes,
      [date.toDateString()]: e.target.value,
    });
  };

  const getTripsForDate = (selectedDate) => {
    return (
      trips?.filter((trip) => {
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
              {note && <div className="calendar-note">{note}</div>}
            </div>
          ) : null;
        }}
      />
      <h3 className="calendar-notes">Notes for {date.toDateString()}</h3>
      <textarea
        className="calendar-notes-text"
        value={notes[date.toDateString()] || ""}
        onChange={handleNoteChange}
        placeholder="Write your notes here... (one per line)"
      />
    </div>
  );
}

export default TripCalendar;
