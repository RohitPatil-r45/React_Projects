import "./App.css";
import Navbar from "./Components/Navbar";
import reducer from "./reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = {
  defaultSearchData: [
    { id: 1, title: "Mobile" },
    { id: 2, title: "Shoes" },
    { id: 3, title: "T Shirst" },
    { id: 4, title: "Laptops" },
    { id: 5, title: "Watches" },
    { id: 6, title: "TV" },
    { id: 7, title: "Sarees" },
  ],
};

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  );
}

export default App;
