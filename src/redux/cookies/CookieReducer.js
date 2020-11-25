import { BUY_COOKIE } from "./CookieActionTypes";

const initalState = {
  numOfCookies: 30,
};
const cookieReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_COOKIE:
      return {
        ...state,
        numOfCookies: state.numOfCookies - action.payload,
      };
    default:
      return state;
  }
};

export default cookieReducer;
