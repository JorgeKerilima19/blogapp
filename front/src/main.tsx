import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContextProvider";

const root = document.getElementById("app");

ReactDOM.createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContextProvider>
  </React.StrictMode>
);
