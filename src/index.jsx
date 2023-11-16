import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./components/LoginPage/LoginPage";
import "./index.less";

const root = document.getElementById("root");
const appRoot = ReactDOM.createRoot(root);

appRoot.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);
