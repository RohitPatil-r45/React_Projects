import { createStore } from "redux";
import { Provider } from "react-redux";
import data from "./data";
import reducer from "./reducer";
import ShopList from "./ShopList";

import "./App.css";
function App() {
  const initialList = {
    data,
    filter_data: [],
    filter: false,
  };
  const shopList = createStore(reducer, initialList);

  return (
    <Provider store={shopList}>
      <ShopList />
    </Provider>
  );
}

export default App;
