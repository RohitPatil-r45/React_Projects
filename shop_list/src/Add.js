import React, { useState } from "react";
import { connect } from "react-redux";
const Add = ({ submit }) => {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");
  const [category, setCategory] = useState("");
  const [open, setOpen] = useState("");
  const [close, setClose] = useState("");
  var reg = /^[a-zA-Z\s]*$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (open < close) {
    //   console.log("green");
    // } else {
    //   console.log("red");
    // }
    if (name && !reg.test(name)) {
      alert("Please enter letters only");
    } else if (open > close) {
      alert("Close date should not be less than open date");
    } else {
      submit(name, area, category, open, close);
      setName("");
      setArea("");
      setCategory("");
      setOpen("");
      setClose("");
    }
  };
  return (
    <article>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Add New Shop </h1>
        <div className="input-container">
          <label>
            <span>Name</span>
          </label>
          :&nbsp;{" "}
          <input
            type="text"
            name="name"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>
            <span>Area </span>
          </label>
          :&nbsp;{" "}
          <select
            id="type"
            name="type"
            className="input"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
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
        <div className="input-container">
          <label>Category</label>:&nbsp;
          <select
            id="type"
            name="type"
            className="input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value=""></option>
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationery Shop">Stationery Shop</option>
          </select>
        </div>
        <div className="date-container">
          <div className="input-container">
            <label>Start date</label>:&nbsp;
            <input
              type="date"
              name="open"
              className="date-input"
              value={open}
              onChange={(e) => setOpen(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label>End date</label>:&nbsp;
            <input
              type="date"
              name="close"
              className="date-input"
              value={close}
              onChange={(e) => setClose(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (name, area, category, open, close) =>
      dispatch({
        type: "SUBMIT",
        payload: { name, area, category, open, close },
      }),
  };
};
export default connect(null, mapDispatchToProps)(Add);
