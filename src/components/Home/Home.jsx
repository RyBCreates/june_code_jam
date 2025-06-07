import Upcoming from "../Upcoming/Upcoming";
import SingleDay from "../SingleDay/SingleDay";
import "./Home.css";

function Home({ handleNewTripClick }) {
  return (
    <div className="Home">
      <Upcoming handleNewTripClick={handleNewTripClick} />
      <SingleDay />
    </div>
  );
}

export default Home;
