import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./TripCalendar.css";

function TripCalendar({ trips }) {
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    const dateStr = date.toISOString().split("T")[0];

    if (!token || !dateStr) return;

    fetch(`http://localhost:3001/notes/${dateStr}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 404) {
          return { text: "" };
        }
        if (!res.ok) {
          throw new Error("Fetch failed");
        }
        return res.json();
      })
      .then((data) => {
        setNotes((prev) => ({
          ...prev,
          [dateStr]: data.text || "",
        }));
      })
      .catch((err) => console.error("Error fetching note:", err));
  }, [date]);

  const handleNoteChange = (e) => {
    const value = e.target.value;
    const dateStr = date.toDateString();
    const token = localStorage.getItem("jwt");

    setNotes((prev) => ({ ...prev, [dateStr]: value }));

    fetch(`http://localhost:3001/notes/${dateStr}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text: value }),
    }).catch((err) => console.error("Error saving note:", err));
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
