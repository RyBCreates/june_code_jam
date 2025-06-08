import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./Header.css";

function Header({ handleNewTripClick, handleRegisterClick, handleLoginClick }) {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <h1 className="header__title">Itinerarium</h1>
      {currentUser ? (
        <>
          <Navbar />
          <button
            className="header__new-plan-button"
            type="button"
            onClick={handleNewTripClick}
          >
            New Trip
          </button>
        </>
      ) : (
        <div className="header__auth-buttons">
          <button
            className="header__button"
            type="button"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
          <button
            className="header__button"
            type="button"
            onClick={handleLoginClick}
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
