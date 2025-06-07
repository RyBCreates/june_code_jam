import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../Modals.css";

function NewPlanModal({ closeModal, activeModal, buttonText }) {
  useEffect(() => {
    if (activeModal === "new-plan") {
    }
  }, [activeModal]);

  const handleSubmit = (event) => {
    event.preventDefault();
    closeModal();
  };

  return (
    <div className="new-plan-modal">
      <ModalWithForm
        title="Create A Plan"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="new-plan"
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
        </div>
      </ModalWithForm>
    </div>
  );
}

export default NewPlanModal;
