import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import BondingFams from "./App";
import "./axios";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BondingFams />
  </BrowserRouter>
);
