import Airplane from "../../assets/travel-icons/airplane.png";
import Car from "../../assets/travel-icons/car.png";
import "./Upcoming.css";

function Upcoming({ handleNewPlanClick }) {
  return (
    <div className="upcoming">
      <h2 className="upcoming__title">Upcoming Trips</h2>
      <ul className="upcoming__cards-list">
        <li className="upcoming__card">
          <img
            className="upcoming__image"
            src={Airplane}
            alt="airplane-icon"
          ></img>
          {/* Credit for Airplane Icon: https://icons8.com/icon/2487/airplane-take-off */}
          <div className="upcoming__trip-container">
            <h3 className="upcoming__trip-name">Paris Trip</h3>
            <div className="upcoming__info">
              <p className="upcoming__dates">Apr 15-20</p>
              <p className="upcoming__info-divider">|</p>
              <p className="upcoming__location">France</p>
            </div>
          </div>
        </li>
        <li className="upcoming__card">
          <img className="upcoming__image" src={Car} alt="car-icon"></img>
          {/* Credit for Car Icon:  https://icons8.com/icon/16690/sedan */}
          <div className="upcoming__trip-container">
            <h3 className="upcoming__trip-name">New York Here We Come</h3>
            <div className="upcoming__info">
              <p className="upcoming__dates">Nov 10th - Nov 20th</p>
              <p className="upcoming__info-divider">|</p>
              <p className="upcoming__location">New York City, New York</p>
            </div>
          </div>
        </li>
        <li className="upcoming__card">
          <img
            className="upcoming__image"
            src={Airplane}
            alt="airplane-icon"
          ></img>
          {/* Credit for Airplane Icon: <a target="_blank" href="https://icons8.com/icon/2487/airplane-take-off">Airplane</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
          <div className="upcoming__trip-container">
            <h3 className="upcoming__trip-name">Mexico</h3>
            <div className="upcoming__info">
              <p className="upcoming__dates">June 15th - June 18th</p>
              <p className="upcoming__info-divider">|</p>
              <p className="upcoming__location">Playa Del Carmen</p>
            </div>
          </div>
        </li>
      </ul>
      <button
        className="upcoming__new-plan-button"
        type="button"
        onClick={handleNewPlanClick}
      >
        Create a New Trip
      </button>
    </div>
  );
}

export default Upcoming;
