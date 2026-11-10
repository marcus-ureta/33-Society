import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Portal from "./portal/Portal.tsx";
import Home from "./Home.tsx";
import ObserveWithIntersect from "./IntersectObserver.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ObserveWithIntersect>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portal />} />
          <Route path="/main" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ObserveWithIntersect>
  </StrictMode>,
);
