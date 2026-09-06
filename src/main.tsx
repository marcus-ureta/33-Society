import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import Portal from "./portal/Portal.tsx";
import Ticket from './Ticket.tsx';
import Home from "./Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Ticket />
  </StrictMode>,
);
