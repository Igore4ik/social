import React from "react";
import Preloader from "../../Preloader/Preloader";
import c from "./InfoProfile.module.css";

const InfoProfile = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <img
          className={c.image}
          src="https://www.imgonline.com.ua/examples/random-pixels-big.png"
          alt=""
        />

        <div className={c.userProfile}>
          <div className={c.photo}>
            <img src={profile[0].picture.medium} alt="" />
          </div>
          <div className={c.desc}>{profile[0].gender}</div>
        </div>
      </div>
    );
  }
};

export default InfoProfile;
