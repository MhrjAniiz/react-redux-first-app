import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCookie } from "../redux";
import { useState } from "react";

function CookieContainer() {
  const [number, setNumber] = useState(1);
  const numOfCookies = useSelector((state) => state.cookies.numOfCookies);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of cookie- > {numOfCookies}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCookie(number))}>buy cake</button>
    </div>
  );
}

export default CookieContainer;
