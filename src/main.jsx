import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Create a root
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the component using the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
