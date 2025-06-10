import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import "./LoginModal.css";

function LoginModal({ activeModal, closeModal, buttonText, switchToRegister }) {
  if (activeModal !== "login") return null;

  const { handleLogin } = useContext(CurrentUserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin({ email, password })
      .then(() => {
        closeModal();
        navigate("/trips");
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (activeModal === "login") {
      setPassword("");
      setEmail("");
    }
  }, [activeModal]);

  return (
    <div className="modal login-modal modal_opened">
      <ModalWithForm
        title="Sign In"
        closeModal={closeModal}
        activeModal={activeModal}
        modalType="login"
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
        </div>
        <button
          className="modal__button_alternate"
          type="button"
          onClick={switchToRegister}
        >
          or Sign Up
        </button>
      </ModalWithForm>
    </div>
  );
}

export default LoginModal;
