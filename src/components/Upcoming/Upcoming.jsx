import { useContext } from "react";
import TripCard from "../TripCard/TripCard";
import "./Upcoming.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Upcoming({ handleNewTripClick, trips, handleDeleteTrip }) {
  const { currentUser } = useContext(CurrentUserContext);

  const userTrips = trips.filter((trip) => trip.owner === currentUser?._id);

  return (
    <div className="upcoming">
      <h2 className="upcoming__title">
        {currentUser?.name
          ? `Upcoming Trips for ${currentUser.name}`
          : "Your Upcoming Trips"}
      </h2>
      <ul className="upcoming__cards-list">
        {userTrips.map((trip) => {
          return (
            <TripCard
              variant="upcoming"
              key={trip._id}
              trip={trip}
              handleDeleteTrip={handleDeleteTrip}
            />
          );
        })}
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
