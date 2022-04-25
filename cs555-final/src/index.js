import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const uuid = require("uuid");

if (!document.cookie.includes("sessionId")) document.cookie = "sessionId=" + uuid.v4();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
