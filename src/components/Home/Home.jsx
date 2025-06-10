import Upcoming from "../Upcoming/Upcoming";
import DaySchedule from "../DaySchedule/DaySchedule";
import "./Home.css";

function Home({ handleNewTripClick, trips, handleDeleteTrip }) {
  return (
    <div className="Home app__section">
      <Upcoming
        handleNewTripClick={handleNewTripClick}
        trips={trips}
        handleDeleteTrip={handleDeleteTrip}
      />
      <DaySchedule />
    </div>
  );
}

export default Home;
