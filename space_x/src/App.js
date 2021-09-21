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
  // if (query === "company") {
  //   return <Home />;
  // }
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

// if (!name) {
//   alert("Name cannot be empty");
// } else if (name && !reg.test(name)) {
//   alert("Please enter letters only");
// } else if (!area) {
//   alert("Area Should not be empty");
// } else if (!category) {
//   alert("Category Should not be empty");
// } else if (!open) {
//   alert("Start Date Should not be empty");
// } else if (!close) {
//   alert("Close Category Should not be empty");
// } else if (open > close) {
//   alert("Close date should not be less than open date");
// } else {
//   submit(name, area, category, open, close);
//   setName("");
//   setArea("");
//   setCategory("");
//   setOpen("");
//   setClose("");
// }

{
  /* {data.map((shop) => {
        const { id, name, area, category, open, close } = shop;

        return (
          <div key={id} className="shop">
            <h1>
              <b>Name: </b> {name}
            </h1>
            <h3>
              <b>Area: </b>
              {area}
            </h3>
            <h3>
              <b>Category: </b>
              {category}
            </h3>
            <p>
              Open: {open} &nbsp;&nbsp; Close: {close}
            </p>
            <button
              type="button"
              className="remove"
              onClick={() => dispatch({ type: "REMOVE", payload: { id } })}
            >
              remove
            </button>
          </div>
        );
      })} */
}

// const checkOpen = (open, close) => {
//   var today = new Date();
//   var dd = today.getDate().toString();
//   var mm = (today.getMonth() + 1).toString();
//   var yyyy = today.getFullYear().toString();

//   if (dd < 10) {
//     dd = "0" + dd;
//   }

//   if (mm < 10) {
//     mm = "0" + mm;
//   }
//   var today_date = yyyy + "-" + mm + "-" + dd;

//   if (open < today_date && today_date < close) {
//     dispatch({ type: "OPEN" });
//   } else {
//     dispatch({ type: "CLOSE" });
//   }
// };
// var check = checkOpen(open, close);
