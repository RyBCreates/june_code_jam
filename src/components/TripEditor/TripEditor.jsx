import Scheduler from "../Scheduler/Scheduler";
import DaySchedule from "../DaySchedule/DaySchedule";
import WeeklySchedule from "../WeeklySchedule/WeeklySchedule";
import "./TripEditor.css";

function TripEditor() {
  return (
    <div className="trip-editor">
      <h2 className="trip-editor__title">"Trip Name" Editor</h2>
      <div className="trip-editor__workspace">
        <Scheduler />
        <DaySchedule />
      </div>
      <WeeklySchedule />
    </div>
  );
}

export default TripEditor;
