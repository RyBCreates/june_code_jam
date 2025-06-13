import LocationPin from "../../assets/location-pin.png";
import "./EventCard.css";

function EventCard({ event }) {
  console.log("This is eventStart:", event.startTime);
  return (
    <li className="day-schedule__event-card">
      <div className="day-schedule__duration">
        <h3 className="day-schedule__time">
          <span className="day-schedule__start-time">{event.startTime}</span>
          <span className="day-schedule__time-divider" />
          <span className="day-schedule__end-time">{event.endTime}</span>
        </h3>
      </div>
      <div className="day-schedule__event-container">
        <div className="day-schedule__header">
          <h3 className="day-schedule__event-title">{event.name}</h3>
          <button className="day-schedule__add-note-button" type="button">
            Add Note
          </button>
        </div>
        <div className="day-schedule__event-info-container">
          <div className="day-schedule__event-location-container">
            <img
              className="day-schedule__location-icon"
              src={LocationPin}
              alt="Location Pin"
            ></img>
            <p className="day-schedule__location-address">{event.location}</p>
          </div>
          <div className="day-schedule__event-notes-container">
            <p className="day-schedule__event-note">
              Get a Taxi from the airport
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
export default EventCard;
