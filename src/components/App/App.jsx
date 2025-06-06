// import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
