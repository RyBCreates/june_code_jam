import { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal";

function RegisterModal({
  closeModal,
  buttonText,
  onRegister,
  activeModal,
  switchToLogin,
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onRegister({ email, password, name });
  };

  useEffect(() => {
    if (activeModal === modalType) {
      setName("");
      setEmail("");
      setPassword("");
    }
  }, [activeModal]);

  const modalType = "register";

  return (
    <div className="register">
      <ModalWithForm
        title="Register"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="register"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
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
        </div>
        <button
          className="modal__button_alternate"
          type="button"
          onClick={switchToLogin}
        >
          or Log in
        </button>
      </ModalWithForm>
    </div>
  );
}
export default RegisterModal;
