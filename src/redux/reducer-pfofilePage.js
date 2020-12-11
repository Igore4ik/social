const ADDPOST = "ADD_POST";
const UPDATENEWPOST = "UPDATE-NEW-POST";

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

const reducerProfilePage = (state, action) => {
  switch (action.type) {
    case ADDPOST:
      state.posts.push({
        id: 7,
        text: state.newPostValue,
        countLikes: 0
      });
      state.newPostValue = "";
      return state;
    case UPDATENEWPOST:
      state.newPostValue = action.text;
      return state;
    default:
      return state;
  }
};
export default reducerProfilePage;
