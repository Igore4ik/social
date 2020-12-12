import React from "react";
import { addPostActionCreator } from "./../../../redux/reducer-pfofilePage";
import { updatePostActionCreator } from "./../../../redux/reducer-pfofilePage";
import MyPosts from "./MyPosts";

const MyPostsContainer = ({ store }) => {
  const addPosts = () => {
    store.dispatch(addPostActionCreator());
  };

  const updateNewPost = (text) => {
    store.dispatch(updatePostActionCreator(text));
  };

  return (
    <MyPosts
      state={store.getState().profilePage.profilePage}
      addPosts={addPosts}
      updateNewPost={updateNewPost}
    />
  );
};

export default MyPostsContainer;
