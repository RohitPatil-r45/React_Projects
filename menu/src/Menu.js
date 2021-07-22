import React from "react";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return (
          <div className="menu-item" key={item.id}>
            <img scr={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4>{item.price}</h4>
              </header>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
