import React, { Component } from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { setProfile } from "../../redux/reducer-pfofilePage";
import Axios from "axios";

class ProfileComponent extends Component {
  componentDidMount() {
    Axios.get(
      `https://randomuser.me/api/?results=1&seed=0e7291e8b94f7b30`
    ).then((response) => {
      // console.log(response.data.results);
      this.props.setProfile(response.data.results);
    });
  }

  render() {
    return <Profile {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostValue: state.profilePage.newPostValue,
    profile: state.profilePage.profile
  };
};
export default connect(mapStateToProps, { setProfile })(ProfileComponent);
