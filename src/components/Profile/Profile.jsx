import React from "react";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import c from "./Profile.module.css";

const Profile = () => {
  return (
    <section className={c.profile}>
      <InfoProfile />
      <MyPostsContainer />
    </section>
  );
};

export default Profile;
