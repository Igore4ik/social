import React from "react";
import Preloader from "../Preloader/Preloader";
import c from "./Users.module.css";

const Users = (props) => {
  let pages = Math.ceil(props.totalUsersCount / props.pageSize);
  let arrOfPages = [];
  for (let i = 1; i <= pages; i++) {
    arrOfPages.push(i);
  }
  return (
    <div>
      {props.isFetching ? <Preloader /> : null}
      <div>
        {arrOfPages.map((el) => {
          return (
            <span
              key={el}
              className={
                props.currentPage === el ? c.activePage + " " + c.page : c.page
              }
              onClick={() => {
                props.setPage(el);
              }}
            >
              {el}
            </span>
          );
        })}
      </div>
      {props.users.map((el) => (
        <div className={c.users} key={el.id.value + el.email}>
          <div className={c.photo}>
            <img
              src="https://us.123rf.com/450wm/yayayoy/yayayoy1511/yayayoy151100009/48712505-stock-vector-smiling-emoticon-with-open-mouth-and-smiling-eyes.jpg?ver=6"
              alt=""
            />
            <div>
              {el.followed ? (
                <button
                  onClick={() => {
                    props.follow(el.id);
                  }}
                >
                  Unfollowed
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.unFollow(el.id);
                  }}
                >
                  Followed
                </button>
              )}
            </div>
          </div>
          <div className={c.content}>
            <div className={c.info}>
              <div className={c.name}>{el.name.first}</div>
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
