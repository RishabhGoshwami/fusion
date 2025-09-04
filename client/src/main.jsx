// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";  // ✅ Yeh import add karo
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>   {/* ✅ Yeh wrapper lagao */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
