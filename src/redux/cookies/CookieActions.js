import { BUY_COOKIE } from "./CookieActionTypes";

export const buyCookie = (number) => {
  return {
    type: BUY_COOKIE,
    payload: number,
  };
};
