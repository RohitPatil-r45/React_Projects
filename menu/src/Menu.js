import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <div className="menu-item" key={id}>
            <img scr={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4>{price}</h4>
              </header>
              <p>{desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
