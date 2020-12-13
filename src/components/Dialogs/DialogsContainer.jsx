import React from "react";
import { addMessageActionCreator } from "../../redux/reducer-dialogsPage";
import { updateMessageActionCreator } from "../../redux/reducer-dialogsPage";
import StoreContext from "../../StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(props) => {
        console.log(props);
        let state = props.getState();
        let dispatch = props.dispatch;
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
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
