import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
// import Main from "../Main/Main";
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

  const handleSubmit = () => {
    // preventDefault
  };

  return (
    <HashRouter>
      <div className="app">
        <div className="app__content">
          <Header onNewPlanClick={handleNewPlanClick} />
          {/* <Main /> */}
          {/* ^^^ Baseplate for new components */}
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <NewPlanModal activeModal={activeModal} closeModal={closeModal} />
      </div>
    </HashRouter>
  );
}

export default App;
