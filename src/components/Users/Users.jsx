import React, { Component } from "react";
import axios from "axios";
import c from "./Users.module.css";

class Users extends Component {
  componentDidMount() {
    // axios.get("https://social-network.samuraijs.com/api/1.0/users")
    axios
      .get(
        `https://randomuser.me/api/?results=${this.props.pageSize}&page=${this.props.currentPage}&seed=0e7291e8b94f7b30`
      )

      .then((response) => {
        this.props.setUsers(response.data.results);
      });
  }
  setPage = (n) => {
    this.props.setCerrentPage(n);
    axios
      .get(
        `https://randomuser.me/api/?results=${this.props.pageSize}&page=${n}&seed=0e7291e8b94f7b30`
      )

      .then((response) => {
        this.props.setUsers(response.data.results);
      });
  };

  render() {
    let pages = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let arrOfPages = [];
    for (let i = 1; i <= pages; i++) {
      arrOfPages.push(i);
    }
    return (
      <div>
        <div>
          {arrOfPages.map((el) => {
            return (
              <span
                key={el}
                className={
                  this.props.currentPage === el
                    ? c.activePage + " " + c.page
                    : c.page
                }
                onClick={() => {
                  this.setPage(el);
                }}
              >
                {el}
              </span>
            );
          })}
        </div>
        {this.props.users.map((el) => (
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
                      this.props.followUser(el.id);
                    }}
                  >
                    Unfollowed
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.unFollowUser(el.id);
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
  }
}
export default Users;
