import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "../Modals.css";

function NewPlanModal({
  closeModal,
  activeModal,
  modalType,
  handleSubmit,
  buttonText,
}) {
  useEffect(() => {
    if (activeModal === "new-plan") {
    }
  }, [activeModal]);

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
          <label htmlFor="email" className="modal__label">
            Email*
            <input
              required
              className="modal__input"
              type="email"
              id="email"
              placeholder="Email"
            ></input>
          </label>
          <label htmlFor="password" className="modal__label">
            Password*
            <input
              required
              className="modal__input"
              type="password"
              id="password"
              placeholder="Password"
            ></input>
          </label>
        </div>
      </ModalWithForm>
    </div>
  );
}

export default NewPlanModal;
