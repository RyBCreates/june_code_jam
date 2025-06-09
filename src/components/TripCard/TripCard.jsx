import { useState } from "react";
import { formatTripDates } from "../../utils/DateFormat";
import { getFallbackImage } from "../../utils/travelIconFallback";
import "./TripCard.css";

function TripCard({ trip, handleDeleteTrip }) {
  //Formats Start and End Dates
  const formattedDates = formatTripDates(trip.startDate, trip.endDate);

  //If invalid image, use fallback image
  const [imageSrc, setImageSrc] = useState(
    trip.imageUrl || getFallbackImage(trip.travel)
  );

  const handleImageError = () => {
    setImageSrc(getFallbackImage(trip.travel));
  };
  return (
    <li className="trip-card__card" key={trip._id}>
      <div className="trip-card__info-container">
        <div className="trip-card__info">
          <h3 className="trip-card__name">{trip.name}</h3>
          <p className="trip-card__dates">{formattedDates}</p>

          <p className="trip-card__location">{trip.location}</p>
        </div>
        <button
          className="trip-card__delete-button"
          onClick={() => {
            handleDeleteTrip(trip);
          }}
        >
          DELETE
        </button>
      </div>
      <img
        src={imageSrc}
        alt={trip.name}
        className="trip-card__image"
        onError={handleImageError}
      />
    </li>
  );
}

export default TripCard;
