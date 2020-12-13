import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import c from "./Dialogs.module.css";
const Dialogs = ({ dialogsPage, updateMessage, addMessage }) => {
  const onAddMessage = () => {
    addMessage();
  };
  const onUpdateMessage = (e) => {
    let text = e.target.value;
    updateMessage(text);
  };

  const dialogsJsx = dialogsPage.dialogs.map((el) => (
    <DialogItem key={el.name + " " + el.id} name={el.name} id={el.id} />
  ));
  const messagesJsx = dialogsPage.messages.map((el) => (
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
          value={dialogsPage.newMessage}
        ></textarea>
        <button onClick={onAddMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
