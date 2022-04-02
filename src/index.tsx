import React from "react";
import ReactDOM from "react-dom";
import RouteList from "./common/routes/Routes";
import "./common/styles/index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteList />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
