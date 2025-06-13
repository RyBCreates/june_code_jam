import Upcoming from "../Upcoming/Upcoming";
import DaySchedule from "../DaySchedule/DaySchedule";
import "./Home.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Home({ handleNewTripClick, trips, handleDeleteTrip }) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="home app__section">
      {currentUser ? (
        <>
          <Upcoming
            handleNewTripClick={handleNewTripClick}
            trips={trips}
            handleDeleteTrip={handleDeleteTrip}
          />
          <DaySchedule />
        </>
      ) : (
        <p className="home__text">
          Create an account or log in to see your upcoming trips!
        </p>
      )}
    </div>
  );
}

export default Home;
