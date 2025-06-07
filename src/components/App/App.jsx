import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Trips from "../Trips/Trips";
import Calendar from "../Calendar/Calendar";
import About from "../About/About";
import NewTripModal from "../Modals/NewTripModal/NewTripModal";

function App() {
  //Opening and Closing of Modals
  const [activeModal, setActiveModal] = useState("");

  const handleNewTripClick = () => {
    setActiveModal("new-trip");
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

  //Create a New trip
  const [trips, setTrips] = useState([]);

  const handleAddTripSubmit = (name, dates, location, imageUrl, travel) => {
    const newTrip = {
      name,
      dates,
      location,
      imageUrl,
      travel,
    };
    return addTrip(newTrip)
      .then((addedTrip) => {
        setTrips([addedTrip, ...trips]);
        closeModal();
        return addedTrip;
      })
      .catch((error) => {
        console.error("Error adding trip:", error);
        throw error;
      });
  };

  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header handleNewTripClick={handleNewTripClick} />
          <Routes>
            <Route
              path="/"
              element={
                <Home handleNewTripClick={handleNewTripClick} trips={trips} />
              }
            />
            <Route
              path="/trips"
              element={
                <Trips handleNewTripClick={handleNewTripClick} trips={trips} />
              }
            />
            <Route path="/Calendar" element={<Calendar />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <NewTripModal
          activeModal={activeModal}
          closeModal={closeModal}
          buttonText="Save Trip"
          onAddTrip={handleAddTripSubmit}
        />
      </div>
    </HashRouter>
  );
}

export default App;
