import React from "react";
import c from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = ({ data, addPost, updateNewPost }) => {
  const refToText = React.createRef();
  // console.log(data)
  const addPosts = () => {
    const text = refToText.current.value;
    if (text.trim() !== "") {
      addPost();
    }

    refToText.current.value = "";
  };

  const toUpdateNewPost = () => {
    let text = refToText.current.value;
    updateNewPost(text);
  };

  const posts = data.profilePage.posts.map((el) => (
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
