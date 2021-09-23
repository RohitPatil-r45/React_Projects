import "./App.css";
import React from "react";
import Home from "./Home";
import Search from "./Search";
import Capsules from "./Capsules";
import Crew from "./Crew";
import History from "./History";
import Landpads from "./Landpads";
import Launchpads from "./Launchpads";
import Launches from "./Launches";
import Rockets from "./Rockets";
import Ships from "./Ships";

import { useGlobalContext } from "./context";
function App() {
  const { query } = useGlobalContext();

  return (
    <div>
      <h1 className="api">SpaceX API</h1>

      <Search />
      {query === "company" ? <Home /> : <></>}
      {query === "capsules" ? <Capsules /> : <></>}
      {query === "crew" ? <Crew /> : <></>}
      {query === "history" ? <History /> : <></>}
      {query === "landpads" ? <Landpads /> : <></>}
      {query === "launchpads" ? <Launchpads /> : <></>}
      {query === "launches" ? <Launches /> : <></>}
      {query === "rockets" ? <Rockets /> : <></>}
      {query === "ships" ? <Ships /> : <></>}
    </div>
  );
}

export default App;
