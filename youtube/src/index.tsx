import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store";

const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
