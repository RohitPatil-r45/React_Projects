import React from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [foods, setFoods] = React.useState(items);
  const [categories, setCategories] = React.useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setFoods(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setFoods(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={foods} />
      </section>
    </main>
  );
}

export default App;
