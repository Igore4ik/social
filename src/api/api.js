import Axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

let instance = Axios.create(
  { 
    withCredentials: true,
    headers: {
      "API-KEY": "caf7b140-65ad-4aeb-a0e8-18a0fcfc54d9"
  }

  }
)
export const getUsers = (currentPage=1,pageSize=5) => {
  return (
    Axios
      .get(
        `https://randomuser.me/api/?results=${pageSize}&page=${currentPage}&seed=0e7291e8b94f7b30`
      )
  )
}