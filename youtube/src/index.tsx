import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./pages/Main/index";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(<Main />);
}
