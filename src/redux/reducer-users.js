import React from "react";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SETUSERS";
// const TOGGLEFOLLOW = "TOGGLE_FOLLOW";

const initialState = {
  users: [
    {
      id: 1,
      followed: false,
      name: "Garry",
      status: "I'm a student",
      location: { city: "Dnipro", country: "Ukraine" }
    },
    {
      id: 2,
      followed: false,
      name: "Olena",
      status: "I'm a doctor",
      location: { city: "Kiev", country: "Ukraine" }
    },
    {
      id: 3,
      followed: true,
      name: "Oleh",
      status: "I'm a businessman",
      location: { city: "Lviv", country: "Ukraine" }
    },
    {
      id: 4,
      followed: false,
      name: "Nick",
      status: "I'm a teacher",
      location: { city: "Odessa", country: "Ukraine" }
    }
  ]
};
// export const toggleAC = (id) => {
//   return {
//     type: TOGGLEFOLLOW,
//     id: id
//   };
// };
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
        users: [...state.users, ...action.users]
      };
    // case TOGGLEFOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map((el) => {
    //       if (action.id === el.id) {
    //         return { ...el, followed: !followed };
    //       }
    //       return el;
    //     })
    //   };
    default:
      return state;
  }
};

export default reducerUsersPage;
