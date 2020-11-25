import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCookie } from "../redux";

function CookieContainer() {
  const numOfCookies = useSelector((state) => state.cookies.numOfCookies);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of cookie- > {numOfCookies}</h1>
      <button onClick={() => dispatch(buyCookie())}>buy cake</button>
    </div>
  );
}

export default CookieContainer;
