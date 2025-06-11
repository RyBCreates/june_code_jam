import { useContext } from "react";
import { formatTripDates } from "../../utils/dateFormat";
import "./WeeklySchedule.css";
import CurrentTripContext from "../../contexts/CurrentTripContext";

function WeeklySchedule() {
  const { currentTrip } = useContext(CurrentTripContext);

  // Format dates
  const formattedDates = formatTripDates(
    currentTrip.startDate,
    currentTrip.endDate
  );

  return (
    <div className="weekly-schedule">
      <div className="weekly-schedule__header">
        <h2 className="weekly-schedule__title">Trip Plan -</h2>
        <p className="weekly-schedule__dates">({formattedDates})</p>
      </div>
      <ul className="weekly-schedule__calendar-grid">
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">12:00 AM</p>
                <p className="weekly-schedule__tile-title">Eat Lunch</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">Buy Tickets</p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
        <li className="weekly-schedule__tile">
          <div className="weekly-schedule__tile-date-container">
            <p className="weekly-schedule__tile-date">April 16th</p>
          </div>
          <div className="weekly-schedule__tile-schedule-container">
            <ul className="weekly-schedule__tile-events">
              <li className="weekly-schedule__tile-event">
                <p className="weekly-schedule__tile-time">9:00 AM</p>
                <p className="weekly-schedule__tile-title">Arrive in Paris</p>
              </li>
            </ul>
            <ul className="weekly-schedule__tile-notes">
              <li className="weekly-schedule__tile-note">
                <p className="weekly-schedule__note">
                  Get a Taxi from the airport
                </p>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default WeeklySchedule;
