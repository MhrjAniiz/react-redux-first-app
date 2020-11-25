import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux";

function IcecreamContainer() {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of Icecream- > {numOfIcecream}</h1>
      <button onClick={() => dispatch(buyIcecream())}>buy cake</button>
    </div>
  );
}

export default IcecreamContainer;
