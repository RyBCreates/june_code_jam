import { useContext } from "react";
import "./Footer.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Footer({ handleUpdateProfileClick }) {
  const { currentUser, handleLogout } = useContext(CurrentUserContext);

  return (
    <footer className="footer">
      {currentUser ? (
        <div className="footer__profile-buttons">
          <button
            className="footer__button footer__logout-button"
            type="button"
            onClick={handleLogout}
          >
            Log Out
          </button>
          <button
            className="footer__button footer__update-button"
            type="button"
            onClick={handleUpdateProfileClick}
          >
            Update Profile
          </button>
        </div>
      ) : (
        <></>
      )}
      <p className="footer__copyright">
        Copyright 2025 - Ryan Bommarito and Avery Walker
      </p>
    </footer>
  );
}

export default Footer;
