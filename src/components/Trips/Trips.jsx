import { useContext } from "react";
import TripCard from "../TripCard/TripCard";
import "./Trips.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Trips({ handleNewTripClick, trips, handleDeleteTrip }) {
  const { currentUser } = useContext(CurrentUserContext);

  const userTrips = trips.filter((trip) => trip.owner === currentUser?._id);

  return (
    <div className="trips app__section">
      <h2 className="trips__title">{currentUser?.name || "Your"}'s Trips</h2>
      <ul className="trips__cards">
        {userTrips.map((trip) => {
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
