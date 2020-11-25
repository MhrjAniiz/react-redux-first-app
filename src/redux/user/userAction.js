import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userActiontypes";
import axios from "axios";

export const fetchRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchRequest);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data;
        dispatch(fetchSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchFailure(errorMsg));
      });
  };
};
