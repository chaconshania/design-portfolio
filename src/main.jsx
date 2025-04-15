import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.jsx";
import About from "./Webpages/About.jsx";
import FitMix from "./Webpages/FitMix.jsx";
import Brevity from "./Webpages/Brevity.jsx";
import OasisXR from "./Webpages/OasisXr.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/fitmix" element={<FitMix />} />
      <Route path="/oasisxr" element={<OasisXR />} />
      <Route path="/brevity" element={<Brevity />} />
    </Routes>
  </BrowserRouter>
);
