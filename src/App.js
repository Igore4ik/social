import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import "./styles.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <section className="content">
          <Navbar />
          <div className="App-content">
            <Route path="/profile" render={() => <ProfileContainer />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/settings" component={Settings} />
          </div>
        </section>
      </div>
    </BrowserRouter>
  );
}
