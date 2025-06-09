import Airplane from "../../assets/travel-icons/airplane.png";
import Car from "../../assets/travel-icons/car.png";
import TripCard from "../TripCard/TripCard";
import "./Upcoming.css";

function Upcoming({ handleNewTripClick, trips, handleDeleteTrip }) {
  return (
    <div className="upcoming">
      <h2 className="upcoming__title">Upcoming Trips</h2>
      <ul className="upcoming__cards-list">
        {trips.map((trip) => {
          return (
            <TripCard
              variant="upcoming"
              key={trip._id}
              trip={trip}
              handleDeleteTrip={handleDeleteTrip}
            />
          );
        })}
        <li className="upcoming__card">
          <img
            className="upcoming__image"
            src={Airplane}
            alt="airplane-icon"
          ></img>
          <div className="upcoming__trip-container">
            <h3 className="upcoming__trip-name">Paris Trip</h3>
            <div className="upcoming__info">
              <p className="upcoming__trip-dates">Apr 15th - Apr 18th</p>

              <p className="upcoming__info-divider">|</p>
              <p className="upcoming__location">France</p>
            </div>
          </div>
        </li>
        <li className="upcoming__card">
          <img className="upcoming__image" src={Car} alt="car-icon"></img>
          <div className="upcoming__trip-container">
            <h3 className="upcoming__trip-name">New York Here We Come</h3>
            <div className="upcoming__info">
              <p className="upcoming__trip-dates">Nov 15th - Nov 18th</p>
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
          <div className="upcoming__trip-container">
            <h3 className="upcoming__trip-name">Mexico</h3>
            <div className="upcoming__info">
              <p className="upcoming__trip-dates">June 15th - June 18th</p>
              <p className="upcoming__info-divider">|</p>
              <p className="upcoming__location">Playa Del Carmen</p>
            </div>
          </div>
        </li>
      </ul>
      <button
        className="upcoming__new-plan-button"
        type="button"
        onClick={handleNewTripClick}
      >
        Create a New Trip
      </button>
    </div>
  );
}

export default Upcoming;
