import React from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Review = () => {
  const [index, setIndex] = React.useState(0);
  const { id, image, name, text, job } = people[index];

  const randomIndex = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = random + 1;
    }
    setIndex(checkIndex(random));
  };
  const checkIndex = (index) => {
    if (index > people.length - 1) {
      return 0;
    }
    if (index < 0) {
      return people.length - 1;
    }
    return index;
  };
  const prevIndex = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextIndex = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <FaQuoteRight className="quote-icon" />
      </div>
      <h3 className="author">{name}</h3>
      <span className="job">{job}</span>
      <p className="info">{text}</p>
      <div className="btn-container">
        <FaChevronLeft className="prev-btn" onClick={() => prevIndex(id)} />
        <FaChevronRight className="next-btn" onClick={() => nextIndex(id)} />
      </div>
      <button className="random-btn" onClick={() => randomIndex()}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;
