import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ profilePage, addPosts, updateNewPost }) => {
  const refToText = React.createRef();

  const onAddPosts = () => {
    const text = refToText.current.value;
    if (text.trim() !== "") {
      addPosts();
    }
    refToText.current.value = "";
  };

  const toUpdateNewPost = () => {
    let text = refToText.current.value;
    updateNewPost(text);
  };

  const posts = profilePage.posts.map((el) => (
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
          value={profilePage.newPostValue}
          ref={refToText}
        ></textarea>
        <button onClick={onAddPosts}>Add post</button>
      </div>
      {posts}
    </div>
  );
};

export default MyPosts;
