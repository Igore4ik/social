import React from "react";
import c from "./Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((el) => (
        <div className={c.users} key={el.id}>
          <div className={c.photo}>
            <img
              src="https://us.123rf.com/450wm/yayayoy/yayayoy1511/yayayoy151100009/48712505-stock-vector-smiling-emoticon-with-open-mouth-and-smiling-eyes.jpg?ver=6"
              alt=""
            />
            <div>
              {el.followed ? (
                <button
                  onClick={() => {
                    props.followUser(el.id);
                  }}
                >
                  Unfollowed
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unFollowUser(el.id);
                  }}
                >
                  Followed
                </button>
              )}
              {/* <button
                onClick={() => {
                  props.toggleFollowUser(el.id);
                }}
              >
                {el.followed ? "Unfollowed" : "Followed"}
              </button> */}
            </div>
          </div>
          <div className={c.content}>
            <div className={c.info}>
              <div className={c.name}>{el.name}</div>
              <div className={c.status}>{el.status}</div>
            </div>
            <div className={c.location}>
              <div className={c.city}>{el.location.city}</div>
              <div className={c.country}>{el.location.country}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
