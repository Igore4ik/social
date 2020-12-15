import React, { Component } from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCerrentPageAC,
  setUsersAC,
  unFollowAC
} from "../../redux/reducer-users";
import Users from "./Users";
import axios from "axios";

class UsersContainer extends Component {
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
    return (
      <Users
        users={this.props.users}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        setPage={this.setPage}
        currentPage={this.props.currentPage}
        followUser={this.props.followUser}
        unFollowUser={this.props.unFollowUser}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCerrentPage: (currentPage) => {
      dispatch(setCerrentPageAC(currentPage));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
