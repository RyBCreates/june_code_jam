import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../Modals.css";

function NewTripModal({ closeModal, activeModal, buttonText, onAddTrip }) {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [travel, setTravel] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter a name");
      return;
    }

    if (!startDate.trim()) {
      alert("Please enter your start date");
      return;
    }

    if (!endDate.trim()) {
      alert("Please enter your end date");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      alert("Start date must be before end date");
      return;
    }

    if (!location.trim()) {
      alert("Please enter your destination");
      return;
    }

    if (!imageUrl.trim()) {
      alert("Please enter an image URL");
      return;
    }

    if (!travel) {
      alert("Please select a travel type");
      return;
    }

    onAddTrip(name, startDate, endDate, location, imageUrl, travel)
      .then(() => {
        setName("");
        setStartDate("");
        setEndDate("");
        setLocation("");
        setImageUrl("");
        setTravel("");
      })
      .catch((err) => {
        console.error(err);
      });

    closeModal();
  };

  if (activeModal !== "new-trip") return null;

  return (
    <div className="modal new-trip-modal modal_opened">
      <ModalWithForm
        title="Create A Plan"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="new-trip"
        handleSubmit={handleSubmit}
        buttonText={buttonText}
      >
        <div className="modal__input_type_text">
          <label htmlFor="trip-name" className="modal__label">
            Trip Name*
            <input
              required
              className="modal__input"
              type="text"
              id="trip-name"
              placeholder="Summer Vacation"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label htmlFor="start-date" className="modal__label">
            Start Date *
            <input
              required
              className="modal__input"
              type="date"
              id="start-date"
              placeholder="Select Your Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </label>
          <label htmlFor="end-date" className="modal__label">
            End Date *
            <input
              required
              className="modal__input"
              type="date"
              id="end-date"
              placeholder="Select Your End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            ></input>
          </label>
          <label htmlFor="location" className="modal__label">
            Location *
            <input
              required
              className="modal__input"
              type="text"
              id="location"
              placeholder="Paris"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </label>
          <label htmlFor="image" className="modal__label">
            Image Url *
            <input
              required
              className="modal__input"
              type="url"
              id="image"
              placeholder="Enter an Image Url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend" required>
              Select the travel type:
            </legend>
            <label htmlFor="plane" className="modal__label_type_radio">
              <input
                className="modal__radio-button"
                type="radio"
                id="plane"
                name="travel"
                value="plane"
                checked={travel === "plane"}
                onChange={(e) => setTravel(e.target.value)}
              />
              Plane
            </label>
            <label htmlFor="car" className="modal__label_type_radio">
              <input
                className="modal__radio-button"
                type="radio"
                id="car"
                name="travel"
                value="car"
                checked={travel === "car"}
                onChange={(e) => setTravel(e.target.value)}
              />
              Car
            </label>
            <label htmlFor="boat" className="modal__label_type_radio">
              <input
                className="modal__radio-button"
                type="radio"
                id="boat"
                name="travel"
                value="boat"
                checked={travel === "boat"}
                onChange={(e) => setTravel(e.target.value)}
              />
              Boat
            </label>
          </fieldset>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default NewTripModal;
