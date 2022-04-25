import React, { useEffect } from "react";
import "./App.css";
// import Game from "./components/Game";
import Game from "./components/GameComponents/Game";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Instructions from "./components/Instructions";
import { useCookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";
import CurrentSessionBoard from "./components/GameComponents/CurrentSessionBoard";

const uuid = require("uuid");

function App() {
  return (
    <Router>
      <div className="App-body">
        <Routes>
          <Route exact path="/" element={<Instructions />} />
          <Route exact path="/game" element={<Game />} />
          <Route exact path="/scores" element={<CurrentSessionBoard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
