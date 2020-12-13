const ADDMESSAGE = "ADD-MESSAGE";
const UPDATEMESSAGE = "UPDATE-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Garry" },
    { id: 2, name: "Inna" },
    { id: 3, name: "Tom" },
    { id: 4, name: "Lena" },
    { id: 5, name: "Oksana" },
    { id: 6, name: "Ivan" }
  ],
  messages: [
    { id: 1, text: "Hello" },
    { id: 2, text: "How are you?" },
    { id: 3, text: "It's fuuny!" }
  ],
  newMessage: ""
};

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
let id = 100;
const reducerDialogsPage = (state = initialState, action) => {
  switch (action.type) {
    case ADDMESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: id++, text: state.newMessage }],
        newMessage: ""
      };

    case UPDATEMESSAGE:
      return {
        ...state,
        newMessage: action.text
      };

    default:
      return state;
  }
};
export default reducerDialogsPage;
