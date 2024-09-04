import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./composants/App.jsx";
import "./sass/main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
