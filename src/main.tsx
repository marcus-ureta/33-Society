import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Portal from "./portal/Portal.tsx";
import Ticket from "./Ticket.tsx";
import Home from "./Home.tsx";
import ObserveWithIntersect from "./IntersectObserver.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ObserveWithIntersect>
      <Home />
    </ObserveWithIntersect>
  </StrictMode>,
);
