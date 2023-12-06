import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BuildContextProvider } from "./context/BuildContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BuildContextProvider>
      <App />
    </BuildContextProvider>
  </React.StrictMode>
);
