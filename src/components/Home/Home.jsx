import Upcoming from "../Upcoming/Upcoming";
import DaySchedule from "../DaySchedule/DaySchedule";
import "./Home.css";
import { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Home({
  handleNewTripClick,
  trips,
  handleDeleteTrip,
  events,
  isLoading,
  setIsLoading,
}) {
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    try {
      setIsLoading(true);
    } catch (err) {
      console.err(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="home app__section">
      {isLoading ? (
        <>
          <p>Page is Loading...</p>
        </>
      ) : currentUser ? (
        <>
          <Upcoming
            handleNewTripClick={handleNewTripClick}
            trips={trips}
            handleDeleteTrip={handleDeleteTrip}
          />
          <DaySchedule events={events} />
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
