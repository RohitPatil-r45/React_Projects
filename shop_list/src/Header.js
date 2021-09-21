import React from "react";
// import { connect } from "react-redux";
const Header = () => {
  return (
    <div className="header">
      <h1>Shop List</h1>
      {/* <button type="button" className="btn" onClick={() => toogle_add()}>
        ADD SHOP
      </button> */}
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return { toogle_add: () => dispatch({ type: "TOGGLE_ADD" }) };
// };
// export default connect(null, mapDispatchToProps)(Header);
export default Header;
