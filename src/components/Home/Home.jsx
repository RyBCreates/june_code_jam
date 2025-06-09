import Upcoming from "../Upcoming/Upcoming";
import SingleDay from "../SingleDay/SingleDay";
import "./Home.css";

function Home({ handleNewTripClick, trips, handleDeleteTrip }) {
  return (
    <div className="Home">
      <Upcoming
        handleNewTripClick={handleNewTripClick}
        trips={trips}
        handleDeleteTrip={handleDeleteTrip}
      />
      <SingleDay />
    </div>
  );
}

export default Home;
