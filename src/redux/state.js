const ADDPOST = "ADD_POST";
const UPDATENEWPOST = "UPDATE-NEW-POST";
const ADDMESSAGE = "ADD-MESSAGE";
const UPDATEMESSAGE = "UPDATE-MESSAGE";

export const addPostActionCreator = () => {
  return {
    type: ADDPOST
  };
};
export const updatePostActionCreator = (text) => {
  return {
    type: UPDATENEWPOST,
    text: text
  };
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

export const store = {
  state: {
    profilePage: {
      posts: [
        { id: 1, text: "It's my first post", countLikes: 12 },
        { id: 2, text: "Hello everyone", countLikes: 2 },
        { id: 3, text: "Nice to meet you", countLikes: 123 }
      ],
      newPostValue: ""
    },
    dialogsPage: {
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
    }
  },
  subscriber: function (observer) {
    this.rerenderEntireTree = observer;
  },
  id: 100,
  rerenderEntireTree() {
    console.log("State changed");
  },
  newPost() {
    return {
      id: this.id++,
      text: this.state.profilePage.newPostValue,
      countLikes: 0
    };
  },
  addNEWMessage() {
    return {
      id: this.id++,
      text: this.state.dialogsPage.newMessage
    };
  },
  dispatch(action) {
    if (action.type === ADDPOST) {
      this.state.profilePage.posts.push(this.newPost());
      this.rerenderEntireTree(this.state);
      this.state.profilePage.newPostValue = "";
    } else if (action.type === UPDATENEWPOST) {
      this.state.profilePage.newPostValue = action.text;
      this.rerenderEntireTree(this.state);
    } else if (action.type === ADDMESSAGE) {
      this.state.dialogsPage.messages.push(this.addNEWMessage());
      this.rerenderEntireTree(this.state);
      this.state.dialogsPage.newMessage = "";
    } else if (action.type === UPDATEMESSAGE) {
      this.state.dialogsPage.newMessage = action.text;
      this.rerenderEntireTree(this.state);
    }
  }
};
