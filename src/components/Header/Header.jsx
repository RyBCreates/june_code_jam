import Navbar from "../Navbar/Navbar";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Itinerarium</h1>
      <Navbar />
    </header>
  );
}

export default Header;
