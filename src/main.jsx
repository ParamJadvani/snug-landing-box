import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/index.css";
import App from "/src/App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "/src/theme/ThemeProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
