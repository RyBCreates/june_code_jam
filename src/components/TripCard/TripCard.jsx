import { useState } from "react";
import { formatTripDates } from "../../utils/DateFormat";
import { getFallbackImage } from "../../utils/travelIconFallback";
import "./TripCard.css";

function TripCard({ variant = "default", trip, handleDeleteTrip }) {
  //Styling Based on Variant
  const cardClass =
    variant === "upcoming" ? "upcoming__card" : "trip-card__card";
  const imageClass =
    variant === "upcoming" ? "upcoming__image" : "trip-card__image";
  const infoContainerClass =
    variant === "upcoming"
      ? "upcoming__trip-container"
      : "trip-card__info-container";
  //Fix This vvvv
  const infoClass = variant === "upcoming" ? "" : "trip-card__info";
  //Fix This ^^^^
  const tripNameClass =
    variant === "upcoming" ? "upcoming__trip-name" : "trip-card__name";
  const tripDatesClass =
    variant === "upcoming" ? "upcoming__trip-dates" : "trip-card__dates";
  const tripLocationClass =
    variant === "upcoming" ? "upcoming__location" : "trip-card__location";
  const tripDeleteButtonClass =
    variant === "upcoming"
      ? "upcoming__delete-button"
      : "trip-card__delete-button";

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
    <li className={cardClass} key={trip._id}>
      <div className={infoContainerClass}>
        <div className={infoClass}>
          <h3 className={tripNameClass}>{trip.name}</h3>
          <p className={tripDatesClass}>{formattedDates}</p>

          <p className={tripLocationClass}>{trip.location}</p>
        </div>
        <button
          className={tripDeleteButtonClass}
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
        className={imageClass}
        onError={handleImageError}
      />
    </li>
  );
}

export default TripCard;
