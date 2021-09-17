import React from "react";
import image from "./no_image.jpg";

const Image = ({ poster, title }) => {
  return (
    <div>
      <img
        src={poster === "N/A" ? image : poster}
        alt={title}
        className="img"
      />
    </div>
  );
};

export default Image;
