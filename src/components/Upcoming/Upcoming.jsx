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
