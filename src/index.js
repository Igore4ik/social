import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { store } from "./redux/state";
import store from "./redux/redux-store";

const rootElement = document.getElementById("root");

const rerenderEntireTree = (store) => {
  // console.log(store);
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    rootElement
  );
};
rerenderEntireTree(store);
store.subscribe(() => {
  //  let state = store.getState();
  rerenderEntireTree(store);
});
