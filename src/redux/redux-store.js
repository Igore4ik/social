import { combineReducers, createStore } from "redux";
import reducerDialogsPage from "./reducer-dialogsPage";
import reducerProfilePage from "./reducer-pfofilePage";

let reducers = combineReducers({
  profilePage: reducerProfilePage,
  dialogsPage: reducerDialogsPage
});
let store = createStore(reducers);

export default store;
