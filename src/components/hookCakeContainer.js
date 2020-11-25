import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HookCakeContainer() {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of cakes - > {numOfCake}</h1>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
}

export default HookCakeContainer;
