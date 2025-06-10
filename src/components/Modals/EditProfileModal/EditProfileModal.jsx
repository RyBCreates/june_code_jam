import { useState, useEffect, useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./EditProfileModal.css";
import CurrentUserContext from "../../../contexts/CurrentUserContext";

function EditProfileModal({ activeModal, closeModal, buttonText }) {
  const { currentUser, updateUser } = useContext(CurrentUserContext);

  if (activeModal !== "edit-profile") return null;

  const modalType = "edit-profile";

  const [name, setName] = useState("");

  useEffect(() => {
    if (activeModal === modalType) {
      setName(currentUser.name);
    }
  }, [activeModal, currentUser]);

  const handleSubmit = (event) => {
    event.preventDefault();
    return updateUser({ name })
      .then(() => {
        closeModal();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="edit-profile-modal">
      <ModalWithForm
        title="Edit Profile Information"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="edit-profile"
        buttonText={buttonText}
        handleSubmit={handleSubmit}
      >
        <label htmlFor="name" className="modal__label">
          Name *
          <input
            required
            className="modal__input"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
      </ModalWithForm>
    </div>
  );
}

export default EditProfileModal;
