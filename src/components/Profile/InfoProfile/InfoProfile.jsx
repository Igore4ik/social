import React from "react";
import c from "./InfoProfile.module.css";

const InfoProfile = () => {
  return (
    <div >
      <img
        className={c.image}
        src="https://www.imgonline.com.ua/examples/random-pixels-big.png"
        alt=""
      />
      <div>ava + description</div>
      
    </div>
  );
};

export default InfoProfile;
