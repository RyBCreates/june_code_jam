import Upcoming from "../Upcoming/Upcoming";
import SingleDay from "../SingleDay/SingleDay";
import "./Home.css";

function Home({ handleNewPlanClick }) {
  return (
    <div className="Home">
      <Upcoming handleNewPlanClick={handleNewPlanClick} />
      <SingleDay />
    </div>
  );
}

export default Home;
