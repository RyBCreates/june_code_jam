import Scheduler from "../Scheduler/Scheduler";
import DaySchedule from "../DaySchedule/DaySchedule";
import WeeklySchedule from "../WeeklySchedule/WeeklySchedule";
import "./TripEditor.css";
import { useContext } from "react";
import CurrentTripContext from "../../contexts/CurrentTripContext";

function TripEditor() {
  const { currentTrip } = useContext(CurrentTripContext);

  console.log("currentTrip:", currentTrip);
  return (
    <div className="trip-editor app__section">
      <h2 className="trip-editor__title">"{currentTrip.name}" - Trip Editor</h2>
      <div className="trip-editor__workspace">
        <Scheduler />
        <DaySchedule />
      </div>
      <WeeklySchedule />
    </div>
  );
}

export default TripEditor;
