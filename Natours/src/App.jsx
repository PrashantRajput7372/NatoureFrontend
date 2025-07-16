import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home";
import Navbar from "./Screens/Navbar";
import NatoursPromise from "./Screens/NatoursPromise";
import Login from "./Screens/Login";
import AllTours from "./Screens/AllTours";
import TOP5 from "./Screens/TOP5";
import { FilterProvider } from "./Contexts/FilterProvider";
import TourClicked from "./Screens/TourClicked";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/alltours" element={<AllTours />} />
            <Route path="/tours/top-5" element={<TOP5 />} />
            <Route path="/tours/:id" element={<TourClicked />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
