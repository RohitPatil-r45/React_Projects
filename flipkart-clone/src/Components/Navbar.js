import "../Css/Navbar.css";
import React, { useState } from "react";
import Image from "../Components/Image";
import { connect } from "react-redux";
import logo from "../Images/logo.png";
import plus from "../Images/plus.png";
import { FaSearch, FaChevronDown, FaShoppingCart } from "react-icons/fa";

const Navbar = ({ defaultData }) => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="nav-container">
      <div className="nav-space"></div>
      <div className="nav-container-1">
        {/*----------------------- logo container ----------------------- */}
        <div className="logo-container">
          <div className="logo-container-1">
            <Image image={logo} setStyle="logo" />
            <p>
              Explore <span style={{ color: "#ffe500" }}>Plus</span>{" "}
              <Image image={plus} setStyle="plus" />
            </p>
          </div>
        </div>

        {/*----------------------- Input container ----------------------- */}

        <div className="input-container">
          <form>
            <div className="form-container">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="input-tab"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setShow(true)}
              />

              <button className="search-btn" type="submit">
                <FaSearch className="search-icon" />
              </button>
            </div>
            <ul
              className={
                show ? "search-suggestions show" : "search-suggestions"
              }
            >
              <li>
                <div>
                  <a className="ss-a" href="/">
                    <div className="ss-a-div">
                      <div
                        className="ss-a-div-img"
                        style={{ height: "32px", width: "32px" }}
                      >
                        <img
                          className="_396cs4 _1uwInh  _3exPp9"
                          alt=""
                          src="https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/321e89f8-9ffa-47a7-a9d4-731da9bde6c4.png?q=90"
                        />
                      </div>
                    </div>
                    <div className="ss-a-div-text">acer predator</div>
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <div className="">
                    <div className="ss-discover">Discover More</div>
                  </div>
                </div>
              </li>
              {defaultData.map((data) => {
                const { id, title } = data;
                return (
                  <li key={id}>
                    <div>
                      <a className="ss-a" href="/">
                        <div className="ss-a-div">
                          <div
                            className="ss-a-div-img"
                            style={{ height: "32px", width: "32px" }}
                          >
                            <img
                              className="_396cs4 _1uwInh  _3exPp9"
                              alt=""
                              src="https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/cc6daa23-e09c-40d8-a4e1-ead447bf80fa.png?q=90"
                            />
                          </div>
                        </div>
                        <div className="ss-a-div-text">{title}</div>
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </form>
        </div>

        {/*----------------------- Login container ----------------------- */}

        <div className="login-container">
          <div className="login-div">
            <a href="/" className="login">
              Login
            </a>
          </div>
        </div>

        <div className="more-container">
          <div className="more">
            <div>More</div>
            <FaChevronDown className="down" />
          </div>
        </div>

        <div className="cart-container">
          <a href="/" className="cart-link">
            <FaShoppingCart className="cart-icon" />
            <span>Cart</span>
          </a>
        </div>
      </div>

      <div className="nav-space"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { defaultData: state.defaultSearchData };
};

export default connect(mapStateToProps)(Navbar);
