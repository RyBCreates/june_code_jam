import Upcoming from "../Upcoming/Upcoming";
import "./Home.css";

function Home({ handleNewPlanClick }) {
  return (
    <div className="Home">
      <Upcoming handleNewPlanClick={handleNewPlanClick} />
    </div>
  );
}

export default Home;
