import { BUY_CAKE } from "./cakeTypes";

const initalState = {
  numOfCake: 10,
};

const cakeReducer = (state = initalState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
