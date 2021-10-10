import React, { useState, useEffect, useRef } from "react";
import Search from "./Search";
import { SearchTags } from "./data";
import { FaTimes, FaRegPlusSquare } from "react-icons/fa";

const TagInput = () => {
  const [inputTags, setInputTags] = useState([]);
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState(false);
  const [location, setLocation] = useState({});
  const [searchData, setSearchData] = useState(SearchTags);
  const [publish, setPublish] = useState(false);
  const [alert, setAlert] = useState(false);
  const Button = useRef(null);

  const displayAdd = (e) => {
    const tempBtn = e.target.getBoundingClientRect();
    const left = tempBtn.left + 5;
    const bottom = tempBtn.bottom - 5;
    setLocation({ left, bottom });
  };

  useEffect(() => {
    const addBtn = Button.current;
    const { left, bottom } = location;
    addBtn.style.left = `${left}px`;
    addBtn.style.top = `${bottom}px`;
  }, [location, inputTags]);

  const checkSearch = () => {
    let searchList = searchData.filter((searchTag) =>
      searchTag.toLowerCase().startsWith(search.toLowerCase())
    );
    if (searchList.length === 0) {
      setAdd(true);
    } else {
      setAdd(false);
    }
  };

  useEffect(() => {
    checkSearch();
  }, [search, add]);

  useEffect(() => {
    if (publish === true && inputTags.length === 0) {
      setPublish(false);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    } else if (inputTags.length === 0) {
      setPublish(false);
    }
  }, [inputTags, publish]);

  const addTag = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && search) {
      const newTag = {
        id: new Date().getTime().toString(),
        tag: search,
      };
      setInputTags([...inputTags, newTag]);
      setSearch("");
    }
  };

  const addSearchTag = (searchTag) => {
    if (searchTag) {
      const newTag = {
        id: new Date().getTime().toString(),
        tag: searchTag,
      };
      setInputTags([...inputTags, newTag]);
      setSearch("");
    }
  };

  const addBtnTag = (e) => {
    e.preventDefault();
    if (search) {
      const newTag = {
        id: new Date().getTime().toString(),
        tag: search,
      };
      setInputTags([...inputTags, newTag]);
      setSearch("");
      setSearchData([...searchData, search]);
    }
  };

  const removeTag = (id) => {
    const newTag = inputTags.filter((tag) => tag.id !== id);
    if (newTag.length === 0) {
      setPublish(false);
    }
    setInputTags(newTag);
  };

  return (
    <div className="container">
      <div className="publish-container">
        <button
          type="button"
          onClick={() => setPublish(true)}
          className="publish-btn"
        >
          Publish
        </button>
        <button
          type="button"
          onClick={() => setPublish(false)}
          className="addTag-btn"
        >
          Add Tags
        </button>
        {alert && (
          <div className="error">
            <h3>Please Enter Tag!!!</h3>
          </div>
        )}
      </div>
      <div>
        <div className="heading">
          <h2>TAGS</h2>
          <p>
            <i>Select time for your event</i>
          </p>
        </div>
        <div className="tag-input">
          {inputTags.map((tags) => {
            const { id, tag } = tags;
            return (
              <div key={id} className={publish ? "tag posted" : "tag"}>
                <span>{tag}</span>
                <button
                  type="button"
                  className={publish ? "btn posted" : "btn"}
                  onClick={() => removeTag(id)}
                >
                  <FaTimes className="icon" />
                </button>
              </div>
            );
          })}
          {publish ? (
            <></>
          ) : (
            <input
              type="text"
              className="input"
              placeholder="Add Tags"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={addTag}
              onFocus={displayAdd}
            />
          )}
          <button
            type="button"
            onClick={addBtnTag}
            className={add ? "addBtn" : "addBtn hide"}
            ref={Button}
          >
            <FaRegPlusSquare className="add-icon" />
          </button>
        </div>
      </div>
      <Search
        searchData={searchData}
        search={search}
        addSearchTag={addSearchTag}
      />
    </div>
  );
};

export default TagInput;
