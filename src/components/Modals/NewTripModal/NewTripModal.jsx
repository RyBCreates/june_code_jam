import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../Modals.css";

function NewTripModal({ closeModal, activeModal, buttonText }) {
  useEffect(() => {
    if (activeModal === "new-plan") {
    }
  }, [activeModal]);

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };

  return (
    <div className="new-trip-modal">
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
              placeholder="New York City"
            ></input>
          </label>
          <label htmlFor="dates" className="modal__label">
            Dates *
            <input
              required
              className="modal__input"
              type="text"
              id="dates"
              placeholder="Select Your Dates"
            ></input>
          </label>
          <label htmlFor="location" className="modal__label">
            Location *
            <input
              required
              className="modal__input"
              type="text"
              id="location"
              placeholder="Enter Your Destination"
            ></input>
          </label>
          <label htmlFor="image" className="modal__label">
            Image Url *
            <input
              required
              className="modal__input"
              type="Url"
              id="image"
              placeholder="Image Url"
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
                // checked={travel === "plane"}
                // onChange={(e) => setTravel(e.target.value)}
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
                // checked={travel === "car"}
                // onChange={(e) => setTravel(e.target.value)}
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
                // checked={travel === "boat"}
                // onChange={(e) => setTravel(e.target.value)}
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
