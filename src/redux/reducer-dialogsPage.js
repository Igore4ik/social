const ADDMESSAGE = "ADD-MESSAGE";
const UPDATEMESSAGE = "UPDATE-MESSAGE";

export const addMessageActionCreator = () => {
  return {
    type: ADDMESSAGE
  };
};
export const updateMessageActionCreator = (text) => {
  return {
    type: UPDATEMESSAGE,
    text: text
  };
};

const reducerDialogsPage = (state, action) => {
  switch (action.type) {
    case ADDMESSAGE:
      state.messages.push({ id: 6, text: state.newMessage });
      state.newMessage = "";
      return state;
    case UPDATEMESSAGE:
      state.newMessage = action.text;
      return state;
    default:
      return state;
  }
};

export default reducerDialogsPage;
