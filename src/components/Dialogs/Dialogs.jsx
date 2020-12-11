import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from "./Dialogs.module.css";
import {
  addMessageActionCreator,
  updateMessageActionCreator
} from "../../redux/state";

const Dialogs = (props) => {
  const addMessage = () => {
    if (props.data.state.dialogsPage.newMessage !== "") {
      props.data.dispatch(addMessageActionCreator());
    }
  };
  const updateMessage = (e) => {
    let text = e.target.value;
    props.data.dispatch(updateMessageActionCreator(text));
  };

  const dialogsJsx = props.data.state.dialogsPage.dialogs.map((el) => (
    <DialogItem key={el.name + " " + el.id} name={el.name} id={el.id} />
  ));
  const messagesJsx = props.data.state.dialogsPage.messages.map((el) => (
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
          value={props.data.state.dialogsPage.newMessage}
        ></textarea>
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
