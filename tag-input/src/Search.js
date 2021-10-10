import React from "react";

const Search = ({ searchData, search, addSearchTag }) => {
  return (
    <div className="search-container">
      {searchData
        .filter((searchTag) => {
          if (!search) {
            return "";
          }
          if (searchTag.toLowerCase().startsWith(search.toLowerCase())) {
            return searchTag;
          }
        })
        .map((searchTag, index) => {
          return (
            <div
              key={index}
              className="search"
              onClick={() => addSearchTag(searchTag)}
            >
              <h3>{searchTag}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default Search;
