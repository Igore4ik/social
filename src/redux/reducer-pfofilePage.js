const ADDPOST = "ADD_POST";
const UPDATENEWPOST = "UPDATE-NEW-POST";
const SET_PROFILE = "SET_PROFILE";

let initialState = {
  posts: [
    { id: 1, text: "It's my first post", countLikes: 12 },
    { id: 2, text: "Hello everyone", countLikes: 2 },
    { id: 3, text: "Nice to meet you", countLikes: 123 }
  ],
  newPostValue: "",
  profile: null
};

export const addPostActionCreator = () => {
  return {
    type: ADDPOST
  };
};
export const updatePostActionCreator = (text) => {
  return {
    type: UPDATENEWPOST,
    text
  };
};
export const setProfile = (profile) => {
  return {
    type: SET_PROFILE,
    profile
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
    case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    default:
      return state;
  }
};
export default reducerProfilePage;
