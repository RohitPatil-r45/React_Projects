import React from "react";
import { connect } from "react-redux";

const Shops = ({ data, dispatch, filter_data, filter, open_shop }) => {
  if (data.length === 0) {
    return (
      <div className="blank">
        <h1>No shop is available</h1>
      </div>
    );
  } else if (filter === true && filter_data.length === 0) {
    return (
      <div className="blank">
        <h1>No shop is available</h1>
      </div>
    );
  }

  return (
    <div className="shop-container">
      {filter
        ? filter_data.map((shop) => {
            const { id, name, area, category, open, close } = shop;

            return (
              <div key={id} className="shop-open">
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
                  Open Date: {open} &nbsp;&nbsp; Close Date: {close}
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
          })
        : data.map((shop) => {
            const { id, name, area, category, open, close } = shop;

            return (
              <div key={id} className="shop-open">
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
                  Open Date: {open} &nbsp;&nbsp; Close Date: {close}
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
          })}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { data, filter_data, filter, open_shop } = state;
  return { data, filter_data, filter, open_shop };
};
export default connect(mapStateToProps)(Shops);
