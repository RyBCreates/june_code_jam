import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header({ handleNewTripClick }) {
  return (
    <header className="header">
      <h1 className="header__title">Itinerarium</h1>
      <Navbar />
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
