import { combineReducers } from "redux";
import icecreamReducer from "./icecream/icecreamReducer";
import cakeReducer from "./cakes/cakeReducer";
import cookieReducer from "./cookies/CookieReducer";
import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  cookies: cookieReducer,
  user: userReducer,
});

export default rootReducer;
