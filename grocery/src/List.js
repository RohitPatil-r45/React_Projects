import React from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const List = ({ list, removeItem, editItem }) => {
  return (
    <div>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <article className="list-item" key={id}>
            <h4>{title}</h4>
            <div className="btn-container">
              <button
                className="btn-edit"
                onClick={() => {
                  editItem(id);
                }}
              >
                <FaEdit />
              </button>
              <button
                className="btn-trash"
                onClick={() => {
                  removeItem(id);
                }}
              >
                <FaTrashAlt />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
