import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SortProvider } from "./store/table-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SortProvider>
    <App />
  </SortProvider>
);
