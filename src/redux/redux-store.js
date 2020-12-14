import { combineReducers, createStore } from "redux";
import reducerDialogsPage from "./reducer-dialogsPage";
import reducerProfilePage from "./reducer-pfofilePage";
import reducerUsersPage from "./reducer-users";

let reducers = combineReducers({
  profilePage: reducerProfilePage,
  dialogsPage: reducerDialogsPage,
  usersPage: reducerUsersPage
});
let store = createStore(reducers);

export default store;
