import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Trips from "../Trips/Trips";
import Calendar from "../Calendar/Calendar";
import About from "../About/About";
import NewPlanModal from "../Modals/NewPlanModal/NewPlanModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleNewTripClick = () => {
    setActiveModal("new-plan");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") closeModal();
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscClose);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("keydown", handleEscClose);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header handleNewTripClick={handleNewTripClick} />
          <Routes>
            <Route
              path="/"
              element={<Home handleNewTripClick={handleNewTripClick} />}
            />
            <Route
              path="/trips"
              element={<Trips handleNewTripClick={handleNewTripClick} />}
            />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <NewPlanModal
          activeModal={activeModal}
          closeModal={closeModal}
          buttonText="Save Plan"
        />
      </div>
    </HashRouter>
  );
}

export default App;
