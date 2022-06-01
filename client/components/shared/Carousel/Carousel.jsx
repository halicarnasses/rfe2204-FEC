import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import CarouselItem from "./CarouselItem.jsx";
import "./Carousel.css";

const Carousel = ({ slides }) => {
  console.log(slides);
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
    <div className="carousel-div">

      <FaChevronLeft
        className="carousel-left-arrow"
        onClick={prevSlide}
      />

      { slides.map((slide, index) => {
        return (
          <div key={index}>
            {/* <h2>TEST</h2> */}
            { index === current ? <CarouselItem image={slide.image} /> : <></>}
          </div>
        );
      })}

      <FaChevronRight
        className="carousel-right-arrow"
        onClick={nextSlide}
      />
    </div>
  );

};

export default Carousel;
