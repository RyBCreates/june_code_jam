import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import NewPlanModal from "../Modals/ModalWithForm/ModalWithForm";

function App() {
  const [activeModal, setActiveModal] = useState("");

  const openNewPlanModal = (e) => {
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
          <Header openNewPlanModal={openNewPlanModal} />
          <Main />
          <Routes>
            <Route></Route>
          </Routes>
        </div>

        {/* NewPlanModal is currently just ModalWithForm */}
        <NewPlanModal activeModal={activeModal} closeModal={closeModal} />
      </div>
    </HashRouter>
  );
}

export default App;
