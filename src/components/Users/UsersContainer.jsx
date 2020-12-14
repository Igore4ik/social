import React from "react";
import { connect } from "react-redux";
import { followAC, toggleAC, unFollowAC } from "../../redux/reducer-users";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (id) => {
      dispatch(followAC(id));
    },
    unFollowUser: (id) => {
      dispatch(unFollowAC(id));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
    // toggleFollowUser: (id) => {
    //   dispatch(toggleAC(id));
    // }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
