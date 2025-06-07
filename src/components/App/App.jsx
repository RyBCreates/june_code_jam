import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import NewPlanModal from "../Modals/NewPlanModal/NewPlanModal";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const handleNewPlanClick = () => {
    setActiveModal("new-plan");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEscClose);
    return () => window.removeEventListener("keydown", handleEscClose);
  }, []);

  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header handleNewPlanClick={handleNewPlanClick} />
          <Routes>
            <Route
              path="/"
              element={<Home handleNewPlanClick={handleNewPlanClick} />}
            />
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
