import BackArrow from "../../assets/arrows/back-arrow.png";
import ForwardArrow from "../../assets/arrows/forward-arrow.png";
import Calendar from "../../assets/calendar.png";
import LocationPin from "../../assets/location-pin.png";
import "./DaySchedule.css";

function DaySchedule() {
  return (
    <div className="day-schedule">
      <div className="day-schedule__header">
        <h2 className="day-schedule__date">April 15</h2>
        <div className="day-schedule__button-container">
          <button className="day-schedule__left-arrow" type="button">
            <img src={BackArrow} alt="Back Arrow" />
          </button>
          <button className="day-schedule__calendar" type="button">
            <img src={Calendar} alt="Calendar" />
          </button>
          <button className="day-schedule__right-arrow" type="button">
            <img src={ForwardArrow} alt="Forward Arrow" />
          </button>
        </div>
      </div>
      <ul className="day-schedule__event-cards">
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
                <p className="day-schedule__location-address">
                  123 Chatham Ave
                </p>
              </div>
              <div className="day-schedule__event-notes-container">
                <p className="day-schedule__event-note">
                  Get a Taxi from the airport
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="day-schedule__event-card">
          <div className="day-schedule__duration">
            <h3 className="day-schedule__time">
              <span className="day-schedule__start-time">10:00 AM</span>
              <span className="day-schedule__time-divider" />
              <span className="day-schedule__end-time">12:00 AM</span>
            </h3>
          </div>
          <div className="day-schedule__event-container">
            <div className="day-schedule__header">
              <h3 className="day-schedule__event-title">Eiffel Tower</h3>
              <button className="day-schedule__add-note-button" type="button">
                Add Note
              </button>
            </div>{" "}
            <div className="day-schedule__event-info-container">
              <div className="day-schedule__event-location-container">
                <img
                  className="day-schedule__location-icon"
                  src={LocationPin}
                  alt="Location Pin"
                ></img>
                <p className="day-schedule__location-address">
                  Eiffel Tower Lane
                </p>
              </div>
              <div className="day-schedule__event-notes-container">
                <p className="day-schedule__event-note">
                  Tickets are $30 per person
                </p>
                <p className="day-schedule__event-note">
                  Susan Still needs to pay.
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default DaySchedule;
