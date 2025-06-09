import { useState } from "react";
import { formatTripDates } from "../../utils/DateFormat";
import { getFallbackImage } from "../../utils/travelIconFallback";
import "./TripCard.css";

function TripCard({ variant = "default", trip, handleDeleteTrip }) {
  // Conditional classes for "Upcoming" or default variant
  const cardClass =
    variant === "upcoming" ? "upcoming__card" : "trip-card__card";
  const imageClass =
    variant === "upcoming" ? "upcoming__image" : "trip-card__image";
  const infoContainerClass =
    variant === "upcoming"
      ? "upcoming__trip-container"
      : "trip-card__info-container";
  const infoClass =
    variant === "upcoming" ? "upcoming__info" : "trip-card__info";
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

  // Format dates
  const formattedDates = formatTripDates(trip.startDate, trip.endDate);

  // Handle image fallback
  const [imageSrc, setImageSrc] = useState(
    variant === "upcoming"
      ? getFallbackImage(trip.travel)
      : trip.imageUrl || getFallbackImage(trip.travel)
  );

  const handleImageError = () => {
    setImageSrc(getFallbackImage(trip.travel));
  };
  return (
    <li className={cardClass} key={trip._id}>
      <img
        src={imageSrc}
        alt={trip.name}
        className={imageClass}
        onError={handleImageError}
      />
      <div className={infoContainerClass}>
        <h3 className={tripNameClass}>{trip.name}</h3>
        <div className={infoClass}>
          <p className={tripDatesClass}>{formattedDates}</p>
          {/* {variant === "upcoming" && (
            <p className="upcoming__info-divider">|</p>
          )} */}
          <p className={tripLocationClass}>{trip.location}</p>
        </div>
        {variant !== "upcoming" && (
          <button
            className={tripDeleteButtonClass}
            onClick={() => handleDeleteTrip(trip)}
          >
            DELETE
          </button>
        )}
      </div>
      {variant === "upcoming" && (
        <button
          className={tripDeleteButtonClass}
          onClick={() => handleDeleteTrip(trip)}
        >
          DELETE
        </button>
      )}
    </li>
  );
}

export default TripCard;
