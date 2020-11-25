import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
import { useState } from "react";

function CakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2> num of cakes -> {props.numOfCake}</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={() => props.buyCake(number)}>buy cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCake: state.cake.numOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
