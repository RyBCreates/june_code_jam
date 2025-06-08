import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header({ handleNewTripClick, handleRegisterClick, handleLoginClick }) {
  return (
    <header className="header">
      <h1 className="header__title">Itinerarium</h1>
      <Navbar />
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
      <button
        className="header__new-plan-button"
        type="button"
        onClick={handleNewTripClick}
      >
        New Trip
      </button>
    </header>
  );
}

export default Header;
