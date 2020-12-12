import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import "./styles.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Profile from "./components/Profile/Profile";

export default function App({ store }) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="content">
          <Navbar />
          <div className="App-content">
            <Route path="/profile" render={() => <Profile store={store} />} />
            <Route
              path="/dialogs"
              render={() => <DialogsContainer store={store} />}
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
