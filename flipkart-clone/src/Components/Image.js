import React from "react";
import "../Css/Navbar.css";
const Image = ({ image, setStyle }) => {
  return <img src={image} className={setStyle} alt="no" />;
};

export default Image;
