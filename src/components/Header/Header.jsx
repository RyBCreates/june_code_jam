import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header({ onNewPlanClick }) {
  return (
    <header className="header">
      <h1 className="header__title">Itinerarium</h1>
      <Navbar />
      <button
        className="header__new-plan-button"
        type="button"
        onClick={onNewPlanClick}
      >
        New Plan
      </button>
    </header>
  );
}

export default Header;
