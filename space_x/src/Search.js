import React from "react";
import { useGlobalContext } from "./context";
const Search = () => {
  const { setQuery } = useGlobalContext();

  return (
    <div className="search-container">
      <label>Filter By</label>
      <select
        id="type"
        name="type"
        className="search-field"
        onChange={(e) => setQuery(e.target.value)}
      >
        <option value="company">company</option>
        <option value="capsules">capsules</option>
        {/* <option value="cores">cores</option> */}
        <option value="crew">crew</option>
        <option value="history">history</option>
        <option value="landpads">landpads</option>
        <option value="launches">launches</option>
        <option value="launchpads">launchpads</option>
        <option value="rockets">rockets</option>
        <option value="ships">ships</option>
      </select>
    </div>
  );
};

export default Search;
