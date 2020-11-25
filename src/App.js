import { Provider } from "react-redux";
import CakeContainer from "./components/cakeContainer";
import HookCakeContainer from "./components/hookCakeContainer";
import IcecreamContainer from "./components/icecreamContainer";
import CookieContainer from "./components/cookieContainer";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <CookieContainer />
        <HookCakeContainer />
        <IcecreamContainer />
      </div>
    </Provider>
  );
}

export default App;
