import React from "react";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPosts from "./MyPosts/MyPosts";
import c from "./Profile.module.css";

const Profile = ({ data, addPost, updateNewPost }) => {
  // console.log(data)
  return (
    <section className={c.profile}>
      <InfoProfile />
      <MyPosts data={data} addPost={addPost} updateNewPost={updateNewPost} />
    </section>
  );
};

export default Profile;
