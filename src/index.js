import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store } from "./redux/state";

const rootElement = document.getElementById("root");

const rerenderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <App data={store} />
      {/* <App data={store} addPost={store} updateNewPost={store} /> */}
    </React.StrictMode>,
    rootElement
  );
};
rerenderEntireTree(store);
store.subscriber(rerenderEntireTree);
