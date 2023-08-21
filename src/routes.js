import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Sidebar from "./layout/Sidebar";
 
const Routing = props => (
  <main className="Content">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" exact element={<Home />} />
    </Routes>
  </main>
);

export default Routing;