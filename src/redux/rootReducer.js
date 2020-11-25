import { combineReducers } from "redux";
import icecreamReducer from "./icecream/icecreamReducer";
import cakeReducer from "./cakes/cakeReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

export default rootReducer;
