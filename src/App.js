import { Provider } from "react-redux";
import CakeContainer from "./components/cakeContainer";
import IcecreamContainer from "./components/icecreamContainer";
import CookieContainer from "./components/cookieContainer";
import store from "./redux/store";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer />
        <CookieContainer />

        <IcecreamContainer /> */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
