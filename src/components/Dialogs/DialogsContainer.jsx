import React from "react";
import { addMessageActionCreator } from "../../redux/reducer-dialogsPage";
import { updateMessageActionCreator } from "../../redux/reducer-dialogsPage";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();
  let dispatch = props.store.dispatch;

  const addMessage = () => {
    if (state.dialogsPage.dialogsPage.newMessage !== "") {
      dispatch(addMessageActionCreator());
    }
  };
  const updateMessage = (text) => {
    dispatch(updateMessageActionCreator(text));
  };

  return (
    <Dialogs
      addMessage={addMessage}
      updateMessage={updateMessage}
      state={state.dialogsPage.dialogsPage}
    />
  );
};

export default DialogsContainer;
