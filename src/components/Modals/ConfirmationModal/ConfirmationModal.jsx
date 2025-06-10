import "./ConfirmationModal.css";
import "../Modals.css";
import closeButton from "../../../assets/close-button.svg";

function ConfirmationModal({ activeModal, closeModal, onConfirm }) {
  if (activeModal !== "confirmation") return null;

  return (
    <div className="modal confirmation-modal modal_opened">
      <div className="modal__content modal__content_type_confirmation">
        <button
          className="modal__close-button"
          type="button"
          onClick={closeModal}
        >
          <img
            className="modal__close-image"
            src={closeButton}
            alt="close button"
          />
        </button>
        <p className="modal__confirmation-message">
          Are you sure you want to delete this trip?
          <br></br>This action is irreversible.
        </p>
        <div className="modal__confirmation-buttons">
          <button
            className="modal__button modal__button_type_delete"
            type="button"
            onClick={onConfirm}
          >
            Yes, delete this trip
          </button>
          <button
            className="modal__button modal__button_type_cancel"
            type="button"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
