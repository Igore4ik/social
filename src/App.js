import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
// import { store } from "./redux/state";
import "./styles.css";

export default function App({ store }) {
  // console.log(store.getState());
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="content">
          <Navbar />
          <div className="App-content">
            <Route
              path="/profile"
              render={() => (
                <Profile
                  data={store.getState()}
                  dispatch={store.dispatch.bind(store)}
                />
              )}
            />
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs
                  state={store.getState()}
                  dispatch={store.dispatch.bind(store)}
                />
              )}
            />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}
