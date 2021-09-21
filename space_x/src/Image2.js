import React from "react";

const Image2 = ({ image, name }) => {
  return (
    <div>
      <img src={image} alt={name} className="img2" />
    </div>
  );
};

export default Image2;
