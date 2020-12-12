const ADDPOST = "ADD_POST";
const UPDATENEWPOST = "UPDATE-NEW-POST";

let initialState = {
  profilePage: {
    posts: [
      { id: 1, text: "It's my first post", countLikes: 12 },
      { id: 2, text: "Hello everyone", countLikes: 2 },
      { id: 3, text: "Nice to meet you", countLikes: 123 }
    ],
    newPostValue: ""
  }
};

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

const reducerProfilePage = (state = initialState, action) => {
  switch (action.type) {
    case ADDPOST:
      state.profilePage.posts.push({
        id: 7,
        text: state.profilePage.newPostValue,
        countLikes: 0
      });
      state.profilePage.newPostValue = "";
      return state;
    case UPDATENEWPOST:
      state.profilePage.newPostValue = action.text;
      return state;
    default:
      return state;
  }
};
export default reducerProfilePage;
