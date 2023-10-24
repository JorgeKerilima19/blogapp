import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const root = document.getElementById("app");

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
