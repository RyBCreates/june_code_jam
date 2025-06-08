import TripCard from "../TripCard/TripCard";
import "./Trips.css";

function Trips({ handleNewTripClick, trips }) {
  return (
    <div className="trips">
      <h2 className="trips__title">Your Trips</h2>
      <ul className="trips__cards">
        {trips.map((trip) => {
          return <TripCard key={trip._id} trip={trip} />;
        })}
        <li
          className="trips__card trips__new-card"
          onClick={handleNewTripClick}
        >
          <span className="trips__plus-icon">＋</span>
          <p className="trips__card-text">New Trip</p>
        </li>

        <li className="trips__card" key="trip2">
          <div className="trips__info">
            <h3 className="trips__name">Paris</h3>
            <p className="trips__start-date">Apr 15th</p>
            <p className="trips__end-date">Apr 20th</p>

            <p className="trips__location">Paris, France</p>
          </div>
          <img src={null} alt="trip name" className="trips__image" />
        </li>
      </ul>
    </div>
  );
}

export default Trips;
