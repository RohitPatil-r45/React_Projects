import "./App.css";
import Home from "./Home";
import Movie from "./SingleMovie";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      {" "}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies/:id" children={<Movie />} />
      </Switch>
    </div>
  );
}

export default App;
