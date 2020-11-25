import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux";
import { useState } from "react";

function IcecreamContainer() {
  const [number, setNumber] = useState(1);
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of Icecream- > {numOfIcecream}</h1>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyIcecream(number))}>buy cake</button>
    </div>
  );
}

export default IcecreamContainer;
