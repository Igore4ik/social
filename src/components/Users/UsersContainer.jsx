import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchingAC,
  followAC,
  setCerrentPageAC,
  setUsersAC,
  unFollowAC
} from "../../redux/reducer-users";
import Users from "./Users";
import axios from "axios";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleFetching(true);
    // axios.get("https://social-network.samuraijs.com/api/1.0/users")
    axios
      .get(
        `https://randomuser.me/api/?results=${this.props.pageSize}&page=${this.props.currentPage}&seed=0e7291e8b94f7b30`
      )

      .then((response) => {
        this.props.toggleFetching(false);
        this.props.setUsers(response.data.results);
      });
  }
  setPage = (n) => {
    this.props.setCerrentPage(n);
    this.props.toggleFetching(true);
    axios
      .get(
        `https://randomuser.me/api/?results=${this.props.pageSize}&page=${n}&seed=0e7291e8b94f7b30`
      )

      .then((response) => {
        this.props.toggleFetching(false);
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
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },
    toggleFetching: (isFetching) => {
      dispatch(fetchingAC(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
