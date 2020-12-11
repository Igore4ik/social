const ADDPOST = "ADD_POST";
const UPDATENEWPOST = "UPDATE-NEW-POST";

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
      ]
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
  addPost() {
    this.state.profilePage.posts.push(this.newPost());
    this.rerenderEntireTree(this.state);
    this.state.profilePage.newPostValue = "";
  },
  updateNewPost(text) {
    this.state.profilePage.newPostValue = text;
    this.rerenderEntireTree(this.state);
  },
  dispatch({ type }) {
    if (type === ADDPOST) {
      this.addPost();
    } else if (type === UPDATENEWPOST) {
      this.updateNewPost();
    }
  }
};
