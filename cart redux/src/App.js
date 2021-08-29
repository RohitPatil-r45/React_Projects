import React from "react";

// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer";
import cartItem from "./data";

const initialState = {
  cart: cartItem,
  total: 0,
  amount: 0,
};
const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItem} />
    </Provider>
  );
}

export default App;
