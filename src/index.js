import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import { Provider } from "./StoreContext";

const rootElement = document.getElementById("root");

const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    rootElement
  );
};
rerenderEntireTree(store);
store.subscribe(() => {
  rerenderEntireTree(store);
});
