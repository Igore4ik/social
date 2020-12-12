import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from "./Dialogs.module.css";
import { addMessageActionCreator } from "../../redux/reducer-dialogsPage";
import { updateMessageActionCreator } from "../../redux/reducer-dialogsPage";

const Dialogs = ({ state, dispatch }) => {
  const addMessage = () => {
    if (state.dialogsPage.dialogsPage.newMessage !== "") {
      dispatch(addMessageActionCreator());
    }
  };
  const updateMessage = (e) => {
    let text = e.target.value;
    dispatch(updateMessageActionCreator(text));
  };

  const dialogsJsx = state.dialogsPage.dialogsPage.dialogs.map((el) => (
    <DialogItem key={el.name + " " + el.id} name={el.name} id={el.id} />
  ));
  const messagesJsx = state.dialogsPage.dialogsPage.messages.map((el) => (
    <Message key={el.name + " " + el.id} text={el.text} />
  ));
  return (
    <div className={c.dialogs}>
      <div className={c.dialogItems}>{dialogsJsx}</div>
      <div className={c.messages}>{messagesJsx}</div>
      <div className={c.addMes}>
        <textarea
          onChange={updateMessage}
          placeholder="Enter your message"
          value={state.dialogsPage.dialogsPage.newMessage}
        ></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
