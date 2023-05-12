import React from "react";
import Login from "../pages/login";
import Home from "../pages/home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
