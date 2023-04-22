import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import LandForm from "./pages/LandForm";
import OwnerForm from "./pages/OwnerForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/landForm" element={<LandForm />} />
        <Route path="/ownerForm" element={<OwnerForm />} />
      </Routes>
    </Router>
  );
}

export default App;
