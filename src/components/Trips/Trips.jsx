import "./Trips.css";

function Trips({ handleNewTripClick }) {
  return (
    <div className="trips">
      <h2 className="trips__title">Your Trips</h2>
      <ul className="trips__cards">
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
            <p className="trips__dates">Apr 15th-20th</p>
            <p className="trips__location">Paris, France</p>
          </div>
          <img src={null} alt="trip name" className="trips__image" />
        </li>
        <li className="trips__card" key="trip1">
          <div className="trips__info">
            <h3 className="trips__name">Trip.name</h3>
            <p className="trips__dates">Trip.dates</p>
            <p className="trips__location">Trip.location</p>
          </div>
          <img src={null} alt="trip name" className="trips__image" />
        </li>
      </ul>
    </div>
  );
}

export default Trips;
