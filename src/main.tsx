import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { setAuthToken } from "./services/api";

//Restore token on load
const token = localStorage.getItem("token");
if (token) {
  setAuthToken(token);
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
