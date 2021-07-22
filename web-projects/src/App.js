import React from "react";
import "./App.css";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = React.useState(data);
  return (
    <main>
      <section className="container">
        <h2>{people.length} Birthdays Today</h2>
        <List people={people} />
        <button onClick={() => setPeople([])} className="btn">
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
