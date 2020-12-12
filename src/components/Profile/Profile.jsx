import React from "react";
import InfoProfile from "./InfoProfile/InfoProfile";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import c from "./Profile.module.css";

const Profile = ({ store }) => {
  return (
    <section className={c.profile}>
      <InfoProfile />
      <MyPostsContainer store={store} />
    </section>
  );
};

export default Profile;
