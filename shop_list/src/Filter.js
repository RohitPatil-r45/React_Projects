import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
const Filter = ({
  filter_area,
  filter_category,
  toggle_filter,
  remove_filter,
  filter_both,
}) => {
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");

  const handleArea = () => {
    if (area) {
      filter_area(area);
      toggle_filter(area, category);
    }
  };
  const handleCategory = () => {
    if (category) {
      filter_category(category);
      toggle_filter(area, category);
    }
  };
  const handleRemove = (e) => {
    e.preventDefault();
    remove_filter();
    setArea("");
    setCategory("");
  };

  const handleBoth = () => {
    if (area && category) {
      filter_both(area, category);
      toggle_filter(area, category);
    }
  };
  useEffect(() => {
    handleCategory();
    handleArea();
    handleBoth();
  }, [area, category]);

  return (
    <div className="filter-container">
      <div className="filter-input-container">
        <label>
          <span>Filter By Area </span>
        </label>
        :&nbsp;{" "}
        <select
          id="type"
          name="type"
          className="filter-input"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        >
          <option value=""></option>
          <option value="Thane">Thane</option>
          <option value="Pune">Pune</option>
          <option value="Mumbai Suburban">Mumbai Suburban</option>
          <option value="Nashik">Nashik</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Ahmednagar">Ahmednagar</option>
          <option value="Solapur">Solapur</option>
          <option value="Navi Mumbai">Navi Mumbai</option>
          <option value="Panvel">Panvel</option>
        </select>
      </div>
      <div className="filter-input-container">
        <label>Filter By Category</label>:&nbsp;
        <select
          id="type"
          name="type"
          className="filter-input"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value=""></option>
          <option value="Grocery">Grocery</option>
          <option value="Butcher">Butcher</option>
          <option value="Baker">Baker</option>
          <option value="Chemist">Chemist</option>
          <option value="Stationery Shop">Stationery Shop</option>
        </select>
      </div>
      <div style={{ width: "25%", marginTop: "1rem" }}>
        <button type="button" className="remove-filter" onClick={handleRemove}>
          Remove Filter
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    filter_area: (area) => dispatch({ type: "FILTER_AREA", payload: { area } }),
    filter_category: (category) =>
      dispatch({ type: "FILTER_CATEGORY", payload: { category } }),
    toggle_filter: (area, category) =>
      dispatch({ type: "TOGGLE_FILTER", payload: { area, category } }),
    filter_both: (area, category) =>
      dispatch({ type: "FILTER_BOTH", payload: { area, category } }),
    remove_filter: () => dispatch({ type: "REMOVE_FILTER" }),
  };
};
export default connect(null, mapDispatchToProps)(Filter);
