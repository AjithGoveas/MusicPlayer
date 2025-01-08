import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BackButtonHandler from "./assets/components/BackButtonHandler";
import Home from "./assets/pages/Home";
import WelcomePage from "./assets/pages/WelcomePage";
import Playlists from "./assets/pages/Playlists";
import Favorites from "./assets/pages/Favorites";
import Artists from "./assets/pages/Artists";
import Login from "./assets/components/Login";

function App() {
  const [transitionDirection, setTransitionDirection] = useState("");
  return (
    <div className="App">
      <Router>
        <BackButtonHandler
          setTransitionDirection={{ setTransitionDirection }}
        />
        <div className={`page-container ${transitionDirection}`}>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/artists" element={<Artists />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
