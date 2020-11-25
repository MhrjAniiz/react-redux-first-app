import { combineReducers } from "redux";
import icecreamReducer from "./icecream/icecreamReducer";
import cakeReducer from "./cakes/cakeReducer";
import cookieReducer from "./cookies/CookieReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  cookies: cookieReducer,
});

export default rootReducer;
