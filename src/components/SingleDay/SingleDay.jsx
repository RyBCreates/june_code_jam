import BackArrow from "../../assets/arrows/back-arrow.png";
import ForwardArrow from "../../assets/arrows/forward-arrow.png";
import Calendar from "../../assets/calendar.png";
import LocationPin from "../../assets/location-pin.png";
import "./SingleDay.css";

function SingleDay() {
  return (
    <div className="single-day">
      <div className="single-day__header">
        <h2 className="single-day__date">April 15</h2>
        <div className="single-day__button-container">
          <button className="single-day__left-arrow" type="button">
            <img src={BackArrow} alt="Back Arrow" />
          </button>
          <button className="single-day__calendar" type="button">
            <img src={Calendar} alt="Calendar" />
          </button>
          <button className="single-day__right-arrow" type="button">
            <img src={ForwardArrow} alt="Forward Arrow" />
          </button>
        </div>
      </div>
      <ul className="single-day__event-cards">
        <li className="single-day__event-card">
          <h3 className="single-day__time">9:00 AM</h3>
          <div className="single-day__event-container">
            <h3 className="single-day__event-title">Arrive in Paris</h3>
            <div className="single-day__event-info-container">
              <div className="single-day__event-location-container">
                <img
                  className="single-day__location-icon"
                  src={LocationPin}
                  alt="Location Pin"
                ></img>
                <p className="single-day__location-address">123 Chatham Ave</p>
              </div>
              <div className="single-day__event-notes-container">
                <p className="single-day__event-note">
                  Get a Taxi from the airport
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="single-day__event-card">
          <h3 className="single-day__time">11:00 AM</h3>
          <div className="single-day__event-container">
            <h3 className="single-day__event-title">Eiffel Tower</h3>
            <div className="single-day__event-info-container">
              <div className="single-day__event-location-container">
                <img
                  className="single-day__location-icon"
                  src={LocationPin}
                  alt="Location Pin"
                ></img>
                <p className="single-day__location-address">
                  Eiffel Tower Lane
                </p>
              </div>
              <div className="single-day__event-notes-container">
                <p className="single-day__event-note">
                  Tickets are $30 per person
                </p>
                <p className="single-day__event-note">
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

export default SingleDay;
