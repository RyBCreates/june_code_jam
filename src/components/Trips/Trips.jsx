import { useContext } from "react";
import TripCard from "../TripCard/TripCard";
import "./Trips.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Trips({ handleNewTripClick, trips, handleDeleteTrip }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="trips">
      <h2 className="trips__title">{currentUser?.name || "Your"}'s Trips</h2>
      <ul className="trips__cards">
        {trips.map((trip) => {
          return (
            <TripCard
              key={trip._id}
              trip={trip}
              handleDeleteTrip={handleDeleteTrip}
            />
          );
        })}
        <li
          className="trips__card trips__new-card"
          onClick={handleNewTripClick}
        >
          <span className="trips__plus-icon">＋</span>
          <p className="trips__card-text">New Trip</p>
        </li>
      </ul>
    </div>
  );
}

export default Trips;
