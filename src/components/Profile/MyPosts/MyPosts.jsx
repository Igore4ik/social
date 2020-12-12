import React from "react";
import { addPostActionCreator } from "./../../../redux/reducer-pfofilePage";
import { updatePostActionCreator } from "./../../../redux/reducer-pfofilePage";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ data, dispatch }) => {
  const refToText = React.createRef();

  const addPosts = () => {
    const text = refToText.current.value;
    if (text.trim() !== "") {
      dispatch(addPostActionCreator());
    }
    refToText.current.value = "";
  };

  const toUpdateNewPost = () => {
    let text = refToText.current.value;
    dispatch(updatePostActionCreator(text));
  };

  const posts = data.profilePage.profilePage.posts.map((el) => (
    <Post
      key={el.id + el.countLikes}
      message={el.text}
      countLikes={el.countLikes}
    />
  ));

  return (
    <div>
      Posts
      <div>
        <textarea
          onChange={toUpdateNewPost}
          value={data.profilePage.newPostValue}
          ref={refToText}
        ></textarea>
        <button onClick={addPosts}>Add post</button>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
