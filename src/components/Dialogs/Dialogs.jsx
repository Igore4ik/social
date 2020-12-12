import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from "./Dialogs.module.css";
const Dialogs = ({ state, updateMessage, addMessage }) => {
  const onAddMessage = () => {
    addMessage();
  };
  const onUpdateMessage = (e) => {
    let text = e.target.value;
    updateMessage(text);
  };

  const dialogsJsx = state.dialogs.map((el) => (
    <DialogItem key={el.name + " " + el.id} name={el.name} id={el.id} />
  ));
  const messagesJsx = state.messages.map((el) => (
    <Message key={el.name + " " + el.id} text={el.text} />
  ));
  return (
    <div className={c.dialogs}>
      <div className={c.dialogItems}>{dialogsJsx}</div>
      <div className={c.messages}>{messagesJsx}</div>
      <div className={c.addMes}>
        <textarea
          onChange={onUpdateMessage}
          placeholder="Enter your message"
          value={state.newMessage}
        ></textarea>
        <button onClick={onAddMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
