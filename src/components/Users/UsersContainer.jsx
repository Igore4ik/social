import React, { Component } from "react";
import { connect } from "react-redux";
import {
  toggleFetching,
  follow,
  setCerrentPage,
  setUsers,
  unFollow
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
        follow={this.props.follow}
        unFollow={this.props.unFollow}
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCerrentPage,
  toggleFetching
})(UsersContainer);
