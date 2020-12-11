import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import c from './Dialogs.module.css';

const Dialogs = ({data}) =>{
const refToMessage = React.createRef();
const addMessage = () =>{
     const text = refToMessage.current.value;
}
   
 const dialogsJsx = data.dialogsPage.dialogs.map(el=><DialogItem name={el.name} id={el.id}/>);
   const messagesJsx = data.dialogsPage.messages.map(el=><Message text={el.text} />);
   return(
      <div className={c.dialogs}>
          <div className={c.dialogItems}>

             { dialogsJsx }

          </div>
          <div className={c.messages}>

              { messagesJsx }
          </div>
         <div className={c.addMes}>
               <textarea ref={refToMessage}></textarea>
               <button onClick={addMessage}>Add message</button>
         </div>
      </div>
   )
}


export default Dialogs;