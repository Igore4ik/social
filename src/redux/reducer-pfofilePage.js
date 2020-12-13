const ADDPOST = "ADD_POST";
const UPDATENEWPOST = "UPDATE-NEW-POST";

let initialState = {
  posts: [
    { id: 1, text: "It's my first post", countLikes: 12 },
    { id: 2, text: "Hello everyone", countLikes: 2 },
    { id: 3, text: "Nice to meet you", countLikes: 123 }
  ],
  newPostValue: ""
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
let id = 100;
const reducerProfilePage = (state = initialState, action) => {
  switch (action.type) {
    case ADDPOST:
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: id++, text: state.newPostValue, countLikes: 0 }
        ],
        newPostValue: ""
      };
    case UPDATENEWPOST:
      return {
        ...state,
        newPostValue: action.text
      };
    default:
      return state;
  }
};
export default reducerProfilePage;
