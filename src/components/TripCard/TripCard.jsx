import { useState } from "react";
import { formatTripDates } from "../../utils/DateFormat";
import { getFallbackImage } from "../../utils/travelIconFallback";
import "./TripCard.css";

function TripCard({ variant = "default", trip, handleDeleteTrip }) {
  // Conditional classes for "Upcoming" or default variant
  const cardClass =
    variant === "upcoming" ? "upcoming__card" : "trip-card__card";
  const imageContainerClass =
    variant === "upcoming"
      ? "upcoming__image-container"
      : "trip-card__image-container";
  const imageClass =
    variant === "upcoming" ? "upcoming__image" : "trip-card__image";
  const infoContainerClass =
    variant === "upcoming"
      ? "upcoming__trip-container"
      : "trip-card__content-container";
  const infoClass =
    variant === "upcoming" ? "upcoming__info" : "trip-card__info";
  const tripNameClass =
    variant === "upcoming" ? "upcoming__trip-name" : "trip-card__name";
  const tripDatesClass =
    variant === "upcoming" ? "upcoming__trip-dates" : "trip-card__dates";
  const tripLocationClass =
    variant === "upcoming" ? "upcoming__location" : "trip-card__location";
  const tripEditButtonClass =
    variant === "upcoming" ? "upcoming__edit-button" : "trip-card__edit-button";

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
      <div className={imageContainerClass}>
        <img
          src={imageSrc}
          alt={trip.name}
          className={imageClass}
          onError={handleImageError}
        />
      </div>
      <div className={infoContainerClass}>
        <h3 className={tripNameClass}>{trip.name}</h3>
        <div className={infoClass}>
          <p className={tripDatesClass}>{formattedDates}</p>
          <p className={tripLocationClass}>{trip.location}</p>
        </div>
        {variant !== "upcoming" && (
          <div className="trip-card__button-container">
            <button
              className={tripDeleteButtonClass}
              onClick={() => handleDeleteTrip(trip)}
            >
              DELETE
            </button>
          </div>
        )}
      </div>
      {variant === "upcoming" && (
        <div className="upcoming__button-container">
          <button
            className={tripDeleteButtonClass}
            onClick={() => handleDeleteTrip(trip)}
          >
            DELETE
          </button>
        </div>
      )}
    </li>
  );
}

export default TripCard;

// User Clicks TripCard
// User is Redirected to Trip Editor
//   - Trip Editor should be Protected and only logged in users should be able to visit
//   - Users can only edit trips that they own
