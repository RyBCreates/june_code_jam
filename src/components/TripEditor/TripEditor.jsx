import Scheduler from "../Scheduler/Scheduler";
import DaySchedule from "../DaySchedule/DaySchedule";
import WeeklySchedule from "../WeeklySchedule/WeeklySchedule";
import "./TripEditor.css";
import { useContext } from "react";
import CurrentTripContext from "../../contexts/CurrentTripContext";

function TripEditor({ onAddEvent, events }) {
  const { currentTrip } = useContext(CurrentTripContext);

  return (
    <div className="trip-editor app__section">
      <h2 className="trip-editor__title">"{currentTrip.name}" - Trip Editor</h2>
      <div className="trip-editor__workspace">
        <Scheduler onAddEvent={onAddEvent} />
        <DaySchedule events={events} />
      </div>
      <WeeklySchedule />
    </div>
  );
}

export default TripEditor;
