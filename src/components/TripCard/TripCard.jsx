import "./TripCard.css";

function TripCard({ trip }) {
  return (
    <li className="trips__card" key="trip1">
      <div className="trips__info">
        <h3 className="trips__name">{trip.name}</h3>
        <p className="trips__dates">{trip.dates}</p>
        <p className="trips__location">{trip.location}</p>
      </div>
      <img src={trip.imageUrl} alt={trip.name} className="trips__image" />
    </li>
  );
}

export default TripCard;
