import React from "react";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
const SET_CURRENT_PAGE = "SETCURRENTPAGE";

const initialState = {
  users: [],
  pageSize: 5, // сколько юзеров отобразить на странице
  totalUsersCount: 20, // общее кол-во юзеров  (totalCount)
  currentPage: 1 // текущая стр
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users
  };
};
export const followAC = (id) => {
  return {
    type: FOLLOW,
    id: id
  };
};
export const unFollowAC = (id) => {
  return {
    type: UNFOLLOW,
    id: id
  };
};
export const setCerrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  };
};

const reducerUsersPage = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (action.id === el.id) {
            return {
              ...el,
              followed: false
            };
          }
          return el;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((el) => {
          if (action.id === el.id) {
            return {
              ...el,
              followed: true
            };
          }
          return el;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users]
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    default:
      return state;
  }
};

export default reducerUsersPage;
