import LocationPin from "../../assets/location-pin.png";
import "./EventCard.css";

function EventCard() {
  return (
    <li className="day-schedule__event-card">
      <div className="day-schedule__duration">
        <h3 className="day-schedule__time">
          <span className="day-schedule__start-time">9:00 AM</span>
          <span className="day-schedule__time-divider" />
          <span className="day-schedule__end-time">10:00 AM</span>
        </h3>
      </div>
      <div className="day-schedule__event-container">
        <div className="day-schedule__header">
          <h3 className="day-schedule__event-title">Arrive in Paris</h3>
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
            <p className="day-schedule__location-address">123 Chatham Ave</p>
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
