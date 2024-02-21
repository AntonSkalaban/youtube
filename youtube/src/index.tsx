import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Main } from "pages/Main/index";
import { store } from "store";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
