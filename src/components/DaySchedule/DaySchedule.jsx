import { useContext, useState, useEffect } from "react";

import EventCard from "../EventCard/EventCard";
import BackArrow from "../../assets/arrows/back-arrow.png";
import ForwardArrow from "../../assets/arrows/forward-arrow.png";
import Calendar from "../../assets/calendar.png";

import { getTripDays, formatTripDates } from "../../utils/dateFormat";

import CurrentTripContext from "../../contexts/CurrentTripContext";

import "./DaySchedule.css";

function DaySchedule({ events }) {
  const { currentTrip } = useContext(CurrentTripContext);

  const [daySchedule, setDaySchedule] = useState([]);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  const tripDays = getTripDays(currentTrip.startDate, currentTrip.endDate);

  const currentDate = tripDays[currentDayIndex];

  const handleNext = () => {
    if (currentDayIndex < tripDays.length - 1)
      setCurrentDayIndex(currentDayIndex + 1);
  };

  const handlePrev = () => {
    if (currentDayIndex > 0) setCurrentDayIndex(currentDayIndex - 1);
  };

  // console.log(currentTrip.startDate);

  // const formattedDates = formatTripDates(trip.startDate, trip.endDate);

  // I want to call the backend to get any of the particular days events, then set that to "daySchedule"
  // When a user clicks off of that day, it will save that day and send it to the backend,
  // otherwise it won't save until a "save" button is pressed.

  console.log("DaySchedule received events:", events);

  return (
    <div className="day-schedule">
      <div className="day-schedule__header">
        <h2 className="day-schedule__date">
          {currentDate?.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </h2>
        <div className="day-schedule__button-container">
          <button
            className="day-schedule__left-arrow"
            type="button"
            onClick={handlePrev}
            disabled={currentDayIndex === 0}
          >
            <img src={BackArrow} alt="Back Arrow" />
          </button>
          <button className="day-schedule__calendar" type="button">
            <img src={Calendar} alt="Calendar" />
          </button>
          <button
            className="day-schedule__right-arrow"
            type="button"
            onClick={handleNext}
            disabled={currentDayIndex === tripDays.length - 1}
          >
            <img src={ForwardArrow} alt="Forward Arrow" />
          </button>
        </div>
      </div>
      <ul className="day-schedule__event-cards">
        {events
          .filter((event) => event.tripId === currentTrip?._id)
          .map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
      </ul>
    </div>
  );
}

export default DaySchedule;
