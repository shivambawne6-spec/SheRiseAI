import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Skills from "./pages/Skills";
import Schemes from "./pages/Schemes";
import Contacts from "./pages/Contacts";
import Jobs from "./pages/Jobs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  );
}
