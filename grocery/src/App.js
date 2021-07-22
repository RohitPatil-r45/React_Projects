import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./App.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEdit(true);
    setEditID(id);
    setName(specificItem.title);
  };

  const removeItem = (id) => {
    showAlert(true, "Item Removed", "danger");
    const newItem = list.filter((item) => item.id !== id);
    setList(newItem);
  };

  const showAlert = (show = false, message = "", type = "") => {
    return setAlert({ show, message, type });
  };

  const clearItems = () => {
    showAlert(true, "Empty List", "danger");
    setList([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "Please enter a item", "danger");
    } else if (name && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setEditID(null);
      setName("");
      setIsEdit(false);
      showAlert(true, "Item Edited", "success");
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      showAlert(true, "Item Added To List", "success");
      setName("");
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section>
      <div className="container">
        <form className="grocery-container" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list={list} />
          )}
          <h2>Grocery Bud</h2>
          <div className="grocery-form">
            <input
              type="text"
              placeholder="eg. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button className="btn" type="submit">
              {isEdit ? "Edit" : "Submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div>
            <List list={list} removeItem={removeItem} editItem={editItem} />
            <button
              className="btn-clear"
              onClick={() => {
                clearItems();
              }}
            >
              Clear Items
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
