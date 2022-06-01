import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    console.log(current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    console.log(current + 1);
  };

  return (
    <div className="slide-div">

      <FaChevronLeft
        className="left-arrow"
        onClick={prevSlide}
      />

      <FaChevronRight
        className="right-arrow"
        onClick={nextSlide}
      />

      { slides.map((slide, index) => {
        return (
          <div key={index}>
            { index === current ? <h2>{current}</h2> : <h2> NONE </h2> }
          </div>
        );
      })}

    </div>
  );

};

export default Slider;
