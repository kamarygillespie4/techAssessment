import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import LandForm from "./pages/LandForm";
import OwnerForm from "./pages/OwnerForm";
import AllHoldings from "./pages/AllHoldings";
import AllOwners from "./pages/AllOwners";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landForm" element={<LandForm />} />
        <Route path="/ownerForm" element={<OwnerForm />} />
        <Route path="/allHoldings" element={<AllHoldings />} />
        <Route path="/allOwners" element={<AllOwners />} />
      </Routes>
    </Router>
  );
}

export default App;
