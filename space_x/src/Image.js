import React from "react";

const Image = ({ image, name }) => {
  return (
    <div>
      <img src={image} alt={name} className="img" />
    </div>
  );
};

export default Image;
