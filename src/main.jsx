import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Reset from "./assets/styles/reset.jsx";
import GlobalStyle from "./assets/styles/global.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
