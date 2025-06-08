import { formatTripDates } from "../../utils/DateFormat";
import Car from "../../assets/travel-icons/car.png";
import Plane from "../../assets/travel-icons/airplane.png";
import Boat from "../../assets/travel-icons/boat.png";
import "./TripCard.css";

function TripCard({ trip, handleDeleteTrip }) {
  //Formats Start and End Dates
  const formattedDates = formatTripDates(trip.startDate, trip.endDate);

  //If invalid image, use fallback image
  const getFallbackImage = (travelType) => {
    if (travelType === "car") return Car;
    if (travelType === "plane") return Plane;
    if (travelType === "boat") return Boat;
    return null;
  };

  const imageSrc = trip.imageUrl || getFallbackImage(trip.travel);

  return (
    <li className="trips__card" key="trip1">
      <div className="trips__info">
        <h3 className="trips__name">{trip.name}</h3>
        <p className="trips__dates">{formattedDates}</p>

        <p className="trips__location">{trip.location}</p>
        <button
          className="trips__delete-button"
          onClick={() => {
            handleDeleteTrip(trip);
          }}
        >
          DELETE
        </button>
      </div>
      <img src={imageSrc} alt={trip.name} className="trips__image" />
    </li>
  );
}

export default TripCard;
