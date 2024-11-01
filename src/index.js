import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./RouterController";
import MyProvider, { AuthProvider } from "./MyProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MyProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </MyProvider>
  </BrowserRouter>
);
