import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "./../../../redux/reducer-pfofilePage";
import { updatePostActionCreator } from "./../../../redux/reducer-pfofilePage";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPosts: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPost: (text) => {
      dispatch(updatePostActionCreator(text));
    }
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
